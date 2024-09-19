import { Link } from "react-router-dom";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Basic Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log("Form Data:", formData);

      const response = await dispatch(registerUser(formData)).unwrap();
      console.log("Registration response:", response);

      if (response) {
        console.log("Registration successful, navigating to signin");
        // You might want to show a success message here
        navigate("/auth/signin");
      } else {
        console.error("Registration failed:", response);
        setError(response.message || "Registration failed for an unknown reason.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || "Registration failed. Please try again.");
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
      {/* Registration Container */}
      <div className="bg-white text-[#652267] p-10 px-24 rounded-lg shadow-lg border w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        {/* Display Error Message */}
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        {/* Input Fields */}
        <form onSubmit={onSubmit}>
          <InputField
            label="First Name"
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />

          <InputField
            label="Last Name"
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />

          <InputField
            label="Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <InputField
            label="Password"
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <InputField
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              className="bg-[#652267] text-[#FFFFFF] px-20 py-3 rounded-full font-semibold hover:bg-[#823084] transition"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <span className="text-sm">Already have an account? </span>
          <Link to="/auth/signin" className="text-sm text-[#652267] font-bold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({ label, id, type, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      className="w-full p-3 border border-[#652267] rounded focus:outline-none focus:border-[#823084]"
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default AuthRegister;