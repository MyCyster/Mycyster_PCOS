import Login from "./components/authentication/Login";
import OTPpage from "./components/authentication/OTPpage";
import ResetPassword from "./components/authentication/ResetPassword";
import SignUp from "./components/authentication/SignUp";
import SuccessPage from "./components/authentication/SuccessPage";
import { Home } from "./components/LandingHome/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/otppage" element={<OTPpage />} />
          <Route path="/successpage" element={<SuccessPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
