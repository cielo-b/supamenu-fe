import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateClientDTO } from "../interfaces/interfaces";
import * as clientService from "../services/client.service";

export const createClientThunk = createAsyncThunk(
  "/clients/create",
  async (dto: CreateClientDTO, thunkAPI) => {
    try {
      const data = await clientService.createClient(dto);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Client creation failed." }
      );
    }
  }
);
