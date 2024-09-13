import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth-slice";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const AuthLogin = () => {
    const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
  
    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
  
    setIsLoading(true);
    setError(null);

    try {
      console.log("Login form data:", formData);
      const response = await dispatch(loginUser(formData)).unwrap();
      console.log("Login response:", response);
      
      if (response && response.token) {
        console.log("Login successful, determining route");
        // You might want to save the token securely here
        // localStorage.setItem('token', response.token);
        
        // Determine the route based on user role
        const isAdmin = response.rest && response.rest.is_Admin;
        const route = isAdmin ? "/admin" : "/dashboard";
        console.log(`User is ${isAdmin ? 'an admin' : 'not an admin'}, navigating to ${route}`);
        navigate(route);
      } else {
        console.error("Login failed: No token in response", response);
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center text-[#F4EAAD] font-abeezee">
      {/* Login Container */}
      <div className="bg-white text-[#652267] p-20 rounded-lg border shadow-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        {/* Input Fields */}
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="w-[20rem] p-3 border border-[#652267] rounded focus:outline-none focus:border-[#823084]"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              className="w-full p-3 border border-[#652267] rounded focus:outline-none focus:border-[#823084]"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <button
              className="bg-[#652267] text-[#FFFFFF] px-16 py-3 rounded-full font-semibold hover:bg-[#823084] transition"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-sm text-[#652267] hover:underline">
            Forgot your password?
          </Link>
        </div>

        <div className="mt-4 text-center">
          <span className="text-sm">Don&apos;t have an account? </span>
          <Link to="/auth/signup" className="text-sm text-[#652267] font-bold hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
