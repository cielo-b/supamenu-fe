import { instance } from "../api";
import { LoginDTO } from "../interfaces/interfaces";

export const login = async (dto: LoginDTO) => {
  try {
    const res = await instance.post("/auth/login", dto);
    localStorage.setItem("user", JSON.stringify(res.data.data.user))
    localStorage.setItem("token", res.data.data.accessToken)
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