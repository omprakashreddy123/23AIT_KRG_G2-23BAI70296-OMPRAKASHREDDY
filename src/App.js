import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WaterTracker from "./pages/WaterTracker";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Routes>
      {/* ✅ FIX: Redirect root */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/dashboard/water"
        element={
          <ProtectedRoutes>
            <WaterTracker />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;