import AuthRoutes from "./components/authentication/Auth";
import { HomeDashboard } from "./pages/HomeDashboard";
import { Home } from "./components/LandingHome/Home";
import { MoodTrackerPage } from "./pages/MoodTrackerPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppHome } from "./components/AppHome";
import { DietaryPlannerPage } from "./pages/DietaryPlannerPage";
import Profile from "./pages/profile";
import { MealPlanner } from "./pages/MealPlanner";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route element={<AppHome />}>
            <Route path="dashboard" element={<HomeDashboard />} />
            <Route path="dietaryplanner" element={<DietaryPlannerPage />} />
            <Route path="moodtracker" element={<MoodTrackerPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="mealplanner" element={<MealPlanner />} />
          </Route>
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
