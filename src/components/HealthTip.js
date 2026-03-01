import { useEffect, useState } from "react";

function HealthTip() {
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setTip(data.slip.advice);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load health tip.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading health tip...</p>;
  if (error) return <p>{error}</p>;

  return <p><strong>Today’s Health Tip:</strong> {tip}</p>;
}

export default HealthTip;