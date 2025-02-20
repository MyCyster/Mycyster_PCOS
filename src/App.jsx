import Login from "./components/authentication/Login";
import NewPassword from "./components/authentication/NewPassword";
import OTPpage from "./components/authentication/OTPpage";
import ResetMessage from "./components/authentication/ResetMessage";
import ResetPassword from "./components/authentication/ResetPassword";
import SignUp from "./components/authentication/SignUp";
import SuccessPage from "./components/authentication/SuccessPage";
import SuccessPasswordChanged from "./components/authentication/SuccessPasswordChanged";
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
          <Route path="/resetmessage" element={<ResetMessage />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/successpassword" element={<SuccessPasswordChanged />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
