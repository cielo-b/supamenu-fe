import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginDTO } from "../interfaces/interfaces";
import * as authService from "../services/auth.service";

export const loginThunk = createAsyncThunk(
  "/auth/login",
  async (dto: LoginDTO, thunkAPI) => {
    try {
      const data = await authService.login(dto);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
