import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const DEMO_USER = "omprakash reddy";
  const DEMO_PASS = "1234";

  const handleLogin = () => {
    if (name === DEMO_USER && password === DEMO_PASS) {
      localStorage.setItem("token", "123");
      localStorage.setItem("username", name);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>🌱 Water Intake Tracker</h2>

        {/* ✅ Credentials Box */}
        <div style={styles.demoBox}>
          <p><strong>Demo Credentials</strong></p>
          <p>Username: <b>omprakash reddy</b></p>
          <p>Password: <b>1234</b></p>
        </div>

        <input
          style={styles.input}
          placeholder="Enter username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },
  card: {
    background: "white",
    padding: 30,
    width: 320,
    borderRadius: 10,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  demoBox: {
    background: "#eef7ff",
    border: "1px solid #cce5ff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
    fontSize: 13,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: 10,
    background: "seagreen",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontWeight: "bold",
  },
};