import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiErrorResponse, RegisterDTO } from "../interfaces/interfaces";
import * as userService from "../services/user.service";

export const registerThunk = createAsyncThunk(
  "/user/register",
  async (dto: RegisterDTO, thunkAPI) => {
    try {
      const data = await userService.register(dto);
      return data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data as ApiErrorResponse);
    }
  }
);
