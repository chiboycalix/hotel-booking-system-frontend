import axios from "axios";

interface AxiosError {
  response: {
    data: {
      message: string;
    }
  }
}
interface IAuthPayload {
  email: string;
  password: string;
}

export interface IUseLoginMutation {
  mutate: (payload: IAuthPayload) => void;
  isLoading: boolean
  isError: boolean
  error: AxiosError | null
  isSuccess: boolean
}

export const login = async (loginPayload: IAuthPayload) => {
  return axios.post(`http://localhost:8010/auth/login`, loginPayload);
};

export const register = async (registerPayload: IAuthPayload) => {
  return axios.post(`http://localhost:8010/auth/register`, registerPayload)
}