import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { urlServer } from "@/pages/api/config";

const initialState = {
  products: [],
  categories: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      console.log("action.payload", action.payload);
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setProducts, setCategories } = adminSlice.actions;

import axios from "axios";

export const fetchProducts = () => async (dispatch, getState) => {
  if (getState().admin.products.length > 0) return;

  try {
    const response = await axios.get(`${urlServer}/products`);
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(`${urlServer}/categories`);
    dispatch(setCategories(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchUpdateProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${urlServer}/products`);
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchDeleteProduct = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${urlServer}/products/${id}`);
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchCreateProduct = (product) => async (dispatch) => {
    try {
        const response = await axios.post(`${urlServer}/products`, product);
        dispatch(setProducts(response.data));
    } catch (error) {
        console.error(error);
    }
};

export default adminSlice.reducer;
