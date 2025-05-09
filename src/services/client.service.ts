import { instance } from "../api";
import { CreateClientDTO } from "../interfaces/interfaces";

export const createClient = async (dto: CreateClientDTO) => {
  try {
    const res = await instance.post("/clients/create", dto, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.data;
  } catch (error: any) {
    throw {
      response: {
        data: error.response?.data || {
          message: error?.message || "Network error occurred",
          error: "NETWORK_ERROR",
        },
      },
    };
  }
};
