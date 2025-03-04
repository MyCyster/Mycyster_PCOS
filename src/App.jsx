import AuthRoutes from "./components/authentication/Auth";

import { Home } from "./components/LandingHome/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
