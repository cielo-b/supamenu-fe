import { instance } from "../api";
import { RegisterDTO } from "../interfaces/interfaces";

export const register = async (dto: RegisterDTO) => {
  try {
    const res = await instance.post("/user/register", dto);
    return res.data;
  } catch (error: any) {
    throw {
      response: {
        data: error.response?.data || {
          message: "Network error or server unavailable"
        }
      }
    };
  }
};