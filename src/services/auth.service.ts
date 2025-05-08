import { instance } from "../api";
import { LoginDTO } from "../interfaces/interfaces";

export const login = async (dto: LoginDTO) => {
  const res = await instance.post("/auth/login", dto);
  return res.data;
};
