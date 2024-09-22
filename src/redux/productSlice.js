import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = import.meta.env.VITE_NODE_BASE_URL;

// Thunks
export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (productData, { rejectWithValue }) => {
    try {
      console.log(baseURL);
      const response = await axios.post(`${baseURL}/api/v1/admin/products/add`, productData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Error adding product');
    }
  }
);

export const uploadImage = createAsyncThunk(
  'product/uploadImage',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/api/v1/admin/products/upload-image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Error uploading image');
    }
  }
);

export const editProduct = createAsyncThunk(
  'product/editProduct',
  async ({ productId, productData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${baseURL}/api/v1/admin/products/edit/${productId}`, productData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Error editing product');
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${baseURL}/api/v1/admin/products/delete/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Error deleting product');
    }
  }
);

// Slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loadingAdd: false,
    loadingUpload: false,
    loadingEdit: false,
    loadingDelete: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add Product
      .addCase(addProduct.pending, (state) => {
        state.loadingAdd = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loadingAdd = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loadingAdd = false;
        state.error = action.payload;
      })
      // Upload Image
      .addCase(uploadImage.pending, (state) => {
        state.loadingUpload = true;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.loadingUpload = false;
        // Optionally, store the uploaded image URL in a separate array if needed
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loadingUpload = false;
        state.error = action.payload;
      })
      // Edit Product
      .addCase(editProduct.pending, (state) => {
        state.loadingEdit = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.loadingEdit = false;
        const index = state.products.findIndex((product) => product._id === action.payload._id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.loadingEdit = false;
        state.error = action.payload;
      })
      // Delete Product
      .addCase(deleteProduct.pending, (state) => {
        state.loadingDelete = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loadingDelete = false;
        state.products = state.products.filter((product) => product._id !== action.payload._id);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loadingDelete = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
