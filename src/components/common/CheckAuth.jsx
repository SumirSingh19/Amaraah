import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // Log the current path and authentication status for debugging
  console.log("Current Path:", location.pathname);
  console.log("Authenticated:", isAuthenticated);
  console.log("User Role:", user?.role);

  // Redirect if the user is not authenticated and is on a restricted route
  if (
    !isAuthenticated &&
    !location.pathname.includes("/auth/signin") &&
    !location.pathname.includes("/auth/signup")
  ) {
    return <Navigate to="/auth/signin" />;
  }

  // Redirect authenticated users away from signin/signup pages
  if (
    isAuthenticated &&
    (location.pathname.includes("/auth/signin") ||
      location.pathname.includes("/auth/signup"))
  ) {
    return user?.role === "admin" ? (
      <Navigate to="/admin" />
    ) : (
      <Navigate to="/user" />
    );
  }

  // If on the home page, redirect based on role
  if (location.pathname === "/") {
    return isAuthenticated ? (
      user?.role === "admin" ? (
        <Navigate to="/admin" />
      ) : (
        <Navigate to="/user" />
      )
    ) : (
      <Navigate to="/auth/signin" />
    );
  }

  // Restrict admin routes for non-admin users
  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // Restrict user routes for admin users
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("user")) {
    return <Navigate to="/admin" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
