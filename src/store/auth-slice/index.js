import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    error: null,
    user: null,
    isAdmin: false,
};

// Get API URL from environment
const apiURL = import.meta.env.VITE_NODE_BASE_URL || "http://localhost:5000"; // Fallback to localhost if env variable is missing

// Log the API base URL to ensure it's correctly set
if (!import.meta.env.VITE_NODE_BASE_URL) {
  console.error("API Base URL not set. Falling back to default localhost.");
}

// Register User Async Action
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${apiURL}/api/v1/auth/signup`, // Ensure the correct endpoint is used
        formData,
        {
          withCredentials: true, // Allow sending cookies if needed
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration successful:", response.data); // Log success response
      return response.data; // Return the successful data from API
    } catch (error) {
      console.error("Error during registration:", error); // Log the entire error object

      // Return error message depending on whether it's a server or network error
      if (error.response) {
        return rejectWithValue(error.response.data); // Server error
      } else {
        return rejectWithValue({ message: "Network error. Please try again later." }); // Network error
      }
    }
  }
);

// Login User Async Action
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      console.log("Form data being sent to the backend:", formData);
      const response = await axios.post(
        `${apiURL}/api/v1/auth/signin`, // Correct API URL for login
        formData,
        {
          withCredentials: true,
        }
      );
      console.log("Login successful:", response.data); // Log the success response
      return response.data; // Return the successful data
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message); // Log error
      if (error.response) {
        return rejectWithValue(error.response.data); // Server error message
      } else {
        return rejectWithValue({ message: "Network error. Please try again later." }); // Network error
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.error = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register User Reducers
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.user = action.payload.user;
          state.isAuthenticated = true;
          state.error = null;
        } else {
          state.user = null;
          state.isAuthenticated = false;
          state.error = "Registration failed: " + (action.payload.message || "Unknown error");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload?.message || "Registration failed.";
      })
      // Login User Reducers
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload && action.payload.token) {
          state.isAuthenticated = true;
          state.user = action.payload.rest;
          state.isAdmin = action.payload.rest && action.payload.rest.is_Admin;
          state.error = null;
        } else {
          state.isAuthenticated = false;
          state.user = null;
          state.isAdmin = false;
          state.error = "Login failed: Invalid response from server";
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.isAdmin = false;
        state.error = action.payload?.message || "Login failed.";
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
