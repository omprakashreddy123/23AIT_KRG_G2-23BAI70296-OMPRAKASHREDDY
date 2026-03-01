import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  const username = localStorage.getItem("username") || "User";
  const count = Number(localStorage.getItem("waterCount") || 0);
  const goal = Number(localStorage.getItem("waterGoal") || 8);

  const progress = Math.min((count / goal) * 100, 100);

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        {/* Top Right Welcome */}
        <div style={styles.topBar}>
          <h3>Welcome, {username} 👋</h3>
        </div>

        {/* Dashboard Content */}
        <div style={styles.grid}>
          {/* Water Summary Card */}
          <div style={styles.card}>
            <h2>💧 Water Summary</h2>

            <p>
              Today: <strong>{count}</strong> glasses
            </p>
            <p>
              Goal: <strong>{goal}</strong> glasses
            </p>

            {/* Graph */}
            <div style={styles.graphBox}>
              <div style={styles.graphBg}>
                <div
                  style={{
                    ...styles.graphFill,
                    width: `${progress}%`,
                  }}
                />
              </div>
              <p style={{ marginTop: 8 }}>
                {count} / {goal} glasses completed
              </p>
            </div>

            {/* CTA Link */}
            <Link to="/dashboard/water">
              <span style={styles.link}>View Water Tracker →</span>
            </Link>
          </div>

          {/* Extra Info Card */}
          <div style={styles.card}>
            <h2>🌱 Wellness Tip</h2>
            <p>
              Staying hydrated improves focus, skin health, and energy levels.
            </p>
            <p style={{ fontSize: 13, color: "#777" }}>
              Track daily water intake for better habits.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

/* 🎨 Styles */
const styles = {
  container: {
    padding: 30,
    background: "#f4f6f8",
    minHeight: "100vh",
  },
  topBar: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  grid: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
  },
  card: {
    background: "white",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    minWidth: 250,
    flex: 1,
  },
  graphBox: {
    marginTop: 15,
  },
  graphBg: {
    height: 12,
    background: "#ddd",
    borderRadius: 6,
    overflow: "hidden",
  },
  graphFill: {
    height: "100%",
    background: "dodgerblue",
    transition: "0.3s",
  },
  link: {
    display: "inline-block",
    marginTop: 15,
    color: "dodgerblue",
    fontWeight: "bold",
    cursor: "pointer",
  },
};