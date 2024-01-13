import axios from "axios";
import { configs } from "../configs";

interface AxiosError {
  response: {
    data: {
      message: string
    }
  }
}
interface IAuthPayload {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
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

export const forgetPassword = async (forgetPasswordPayload: IAuthPayload) => {
 return axios.post(`${configs.baseURL}/auth/forget-password`, forgetPasswordPayload)
}

export const resetPassword = async (resetPasswordPayload: IAuthPayload) => {
  return axios.post(`${configs.baseURL}/auth/reset-password`, resetPasswordPayload)
}

export const verifyAccount = async (verifyAccountPayload: IAuthPayload) => {
  return axios.post(`${configs.baseURL}/auth/verify-account`, verifyAccountPayload)
}

export const googleLogin = async () => {
  return axios.get(`${configs.baseURL}/auth/login/google`)
}
