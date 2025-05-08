import { instance } from "../api";
import { RegisterDTO } from "../interfaces/interfaces";

export const register = async (dto: RegisterDTO) => {
  const res = await instance.post("/user/register", dto);
  return res.data;
};
