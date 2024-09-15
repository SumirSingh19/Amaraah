import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    error: null,
    user: null,
    role: null,
};

const apiURL = import.meta.env.VITE_NODE_BASE_URL || "http://localhost:5000";

if (!import.meta.env.VITE_NODE_BASE_URL) {
  console.error("API Base URL not set. Falling back to default localhost.");
}

// Register User Async Action
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${apiURL}/api/v1/auth/signup`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration successful:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: "Network error. Please try again later." });
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
        `${apiURL}/api/v1/auth/signin`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log("Login successful:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: "Network error. Please try again later." });
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
      state.role = action.payload?.role || null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.error = null;
      state.user = null;
      state.role = null;
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
          state.role = action.payload.user?.role || null;
          state.error = null;
        } else {
          state.user = null;
          state.isAuthenticated = false;
          state.role = null;
          state.error = "Registration failed: " + (action.payload.message || "Unknown error");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.role = null;
        state.error = action.payload?.message || "Registration failed.";
      })
      // Login User Reducers
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const { token, user } = action.payload || {};

        if (token && user) {
          state.isAuthenticated = true;
          state.user = user;
          state.role = user.role || null;
          state.error = null;
        } else {
          state.isAuthenticated = false;
          state.user = null;
          state.role = null;
          state.error = "Login failed: Invalid response from server";
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.role = null;
        state.error = action.payload?.message || "Login failed.";
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
