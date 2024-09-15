import { Link } from "react-router-dom";

const UnauthPage = () => {
  return (
    <div className="text-center p-20">
      <h1 className="text-4xl font-bold">Access Denied</h1>
      <p>You are not authorized to access this page.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default UnauthPage;
