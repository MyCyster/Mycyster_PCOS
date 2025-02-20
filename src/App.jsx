import AuthRoutes from "./components/authentication/Auth";
import Auth from "./components/authentication/Auth";
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

          {AuthRoutes()}
        </Routes>
      </Router>
    </>
  );
}

export default App;
