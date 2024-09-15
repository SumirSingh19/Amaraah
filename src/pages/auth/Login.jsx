import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/components/useAuth';

const AuthLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await login(formData);
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };
  return (
    <div className="flex justify-center items-center text-[#F4EAAD] font-abeezee">
      <div className="bg-white text-[#652267] p-20 rounded-lg border shadow-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

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

        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-sm text-[#652267] hover:underline">
            Forgot your password?
          </Link>
        </div>

        <div className="mt-4 text-center">
          <span className="text-sm">Don't have an account? </span>
          <Link to="/auth/signup" className="text-sm text-[#652267] font-bold hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
