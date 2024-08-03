import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function GuestLayout(): JSX.Element {
  const { token } = useAuth();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div
      id="guestLayout"
      className="min-h-screen flex justify-center flex-col bg-white"
    >
      <Outlet />
    </div>
  );
}
