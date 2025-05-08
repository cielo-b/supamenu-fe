import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterDTO } from "../interfaces/interfaces";
import * as userService from "../services/user.service";

export const registerThunk = createAsyncThunk(
  "/user/register",
  async (dto: RegisterDTO, thunkAPI) => {
    try {
      const data = userService.register(dto);
      return data;
    } catch (e: any) {
      thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
