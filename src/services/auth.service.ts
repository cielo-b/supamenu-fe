import { instance } from "../api";
import { LoginDTO } from "../interfaces/interfaces";

export const login = async (dto: LoginDTO) => {
  try {
    const res = await instance.post("/auth/login", dto);
    return res.data;
  } catch (error: any) {
    throw {
      response: {
        data: error.response?.data || {
          message: error.message || "Network error occurred",
          error: "NETWORK_ERROR"
        }
      }
    };
  }
};