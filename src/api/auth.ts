import axios from "axios";
import { configs } from "../configs";

interface AxiosError {
  message: string;
}
interface IAuthPayload {
  email: string;
  password: string;
}

export interface IUseAuthMutation {
  mutate: (payload: IAuthPayload) => void;
  isLoading: boolean
  isError: boolean
  error: AxiosError | null
  isSuccess: boolean
}

export const login = async (loginPayload: IAuthPayload) => {
  return axios.post(`${configs.baseURL}/auth/login`, loginPayload);
};

export const register = async (registerPayload: IAuthPayload) => {
  return axios.post(`${configs.baseURL}/auth/register`, registerPayload)
}