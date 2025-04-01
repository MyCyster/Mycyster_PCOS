import AuthRoutes from "./components/authentication/Auth";
import { HomeDashboard } from "./components/dashboard/HomeDashboard";
import { Home } from "./components/LandingHome/Home";
import { MoodTrackerPage } from "./components/MoodTracker/MoodTrackerPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/dashboard" element={<HomeDashboard />} />
          <Route path="/moodtracker" element={<MoodTrackerPage />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
