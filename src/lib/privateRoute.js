import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If no token, redirect to unauth page
    return <Navigate to="/unauth-page" />;
  }

  // Render the protected component
  return children;
};

export default PrivateRoute;
