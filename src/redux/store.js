import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,  // Ensure productSlice is correctly added
  },
});

export default store;
