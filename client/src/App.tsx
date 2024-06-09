
import { Navigate, Route, Routes } from "react-router-dom";
import SigninPage from "./pages/Auth/SigninPage/SigninPage";
import VerifyAccountPage from "./pages/Auth/VerifyAccountPage/VerifyAccountPage";
import ReactivatePage from "./pages/Auth/ReactivatePage/ReactivatePage";
import NotVerifiedPage from "./pages/Auth/NotVerifiedPage/NotVerifiedPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage/ResetPasswordPage";
import SignupPage from "./pages/Auth/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import AccountBlockedPage from "./pages/Auth/AccountBlockedPage/AccountBlockedPage";
import { useAuth } from "./contexts/AuthContext";

export default function App() {
  const { isAuth } = useAuth();

  return (
      <Routes>
        <Route path="/" element={!isAuth ? <SigninPage /> : <Navigate replace to="/home" />} />
        <Route path="/home" element={isAuth ? <HomePage /> : <Navigate replace to="/" />} />
        <Route path="/sign-up" element={!isAuth ? <SignupPage /> : <Navigate replace to="/home" />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/not-verified" element={!isAuth ? <NotVerifiedPage /> : <Navigate replace to="/home" />} />
        <Route path="/blocked-user" element={!isAuth ? <AccountBlockedPage /> : <Navigate replace to="/home" />} />
        <Route path="/reactivate-account" element={!isAuth ? <ReactivatePage /> : <Navigate replace to="/home" />} />
        <Route path="/verify/:token" element={!isAuth ? <VerifyAccountPage /> : <Navigate replace to="/home" />} />
      </Routes>
  );
}
