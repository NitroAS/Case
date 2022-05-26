import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children }) => {
  let token = localStorage.getItem("token")
  if (token === undefined) {
    return <Navigate to="/" replace />;
  }

  return children;
};
