import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import CounterDisplay from "../components/CounterDisplay";

function WaterTracker() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  useEffect(() => {
    const savedCount = localStorage.getItem("waterCount");
    const savedGoal = localStorage.getItem("waterGoal");

    if (savedCount) setCount(Number(savedCount));
    if (savedGoal) setGoal(Number(savedGoal));
  }, []);

 
  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  
  useEffect(() => {
    localStorage.setItem("waterGoal", goal);
  }, [goal]);


  const addWater = useCallback(() => {
  setCount((prev) => {
    if (prev >= goal) return prev;
    return prev + 1;
  });
}, [goal]);

  const removeWater = useCallback(() => {
    setCount((prev) => Math.max(prev - 1, 0));
  }, []);

  const reset = () => setCount(0);

  const fetchTip = useCallback(async () => {
    setLoading(true);
    setError("");
    setTip("");

    try {
      const res = await fetch(
        "https://api.allorigins.win/raw?url=https://api.adviceslip.com/advice"
      );
      const data = await res.json();
      setTip(data.slip.advice);
    } catch {
      setError("Failed to fetch tip");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTip();
  }, [fetchTip]);

  const progress = Math.min((count / goal) * 100, 100);

  return (
    <>
      <Navbar />

      <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
        <h2>💧 Water Tracker</h2>

        {/* Counter */}
        <CounterDisplay count={count} goal={goal} />

        {/* Goal reached */}
        {count >= goal && (
          <p style={{ color: "green", fontWeight: "bold" }}>
            🎉 Goal Reached!
          </p>
        )}

        {/* Buttons */}
        <div style={{ marginTop: 10 }}>
          <button onClick={addWater}>+</button>
          <button onClick={removeWater} style={{ marginLeft: 10 }}>
            -
          </button>
          <button onClick={reset} style={{ marginLeft: 10 }}>
            Reset
          </button>
        </div>

        {/* Goal input */}
        <div style={{ marginTop: 15 }}>
          <label>Daily Goal: </label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            style={{ width: 60 }}
          />
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: 15 }}>
          <div
            style={{
              height: 10,
              background: "#ddd",
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                background: "dodgerblue",
                height: "100%",
              }}
            />
          </div>
          <p>{count} / {goal} glasses completed</p>
        </div>

        <hr />

        {/* API Section */}
        <h3>🩺 Daily Health Tip</h3>

        <button onClick={fetchTip}>Refresh Tip</button>

        {loading && <p>Loading tip...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {tip && <p><strong>Today's Health Tip:</strong> {tip}</p>}
      </div>
    </>
  );
}

export default WaterTracker;