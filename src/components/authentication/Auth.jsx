import { Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import OTPpage from "./OTPpage";
import SuccessPage from "./SuccessPage";
import ResetMessage from "./ResetMessage";
import NewPassword from "./NewPassword";
import SuccessPasswordChanged from "./SuccessPasswordChanged";

function AuthRoutes() {
  return (
    <Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/otppage" element={<OTPpage />} />
      <Route path="/successpage" element={<SuccessPage />} />
      <Route path="/resetmessage" element={<ResetMessage />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/successpassword" element={<SuccessPasswordChanged />} />
    </Route>
  );
}

export default AuthRoutes;
