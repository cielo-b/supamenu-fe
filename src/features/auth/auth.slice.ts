import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../interfaces/interfaces";

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {},
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
