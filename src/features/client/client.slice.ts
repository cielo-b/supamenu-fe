import { createSlice } from "@reduxjs/toolkit";
import { ClientInitialState } from "../../interfaces/interfaces";

const initialState: ClientInitialState = {
  client: null,
  error: null,
  loading: false,
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
});

export const clientReducer = clientSlice.reducer;
