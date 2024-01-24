import { axiosFetch } from "../configs";
import { configs } from "../configs";

interface AxiosError {
  response: {
    data: {
      message: string;
    };
  };
}
interface IAuthPayload {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
}

export interface IUseAuthMutation {
  mutate: (payload: IAuthPayload) => void;
  isLoading: boolean;
  isError: boolean;
  error: AxiosError | null;
  isSuccess: boolean;
}

export const login = async (loginPayload: IAuthPayload) => {
  return axiosFetch(false).post(`${configs.baseURL}/auth/login`, loginPayload);
};

export const register = async (registerPayload: IAuthPayload) => {
  return axiosFetch(false).post(
    `${configs.baseURL}/auth/register`,
    registerPayload
  );
};

export const forgetPassword = async (forgetPasswordPayload: IAuthPayload) => {
  return axiosFetch(false).post(
    `${configs.baseURL}/auth/forgot-password`,
    forgetPasswordPayload
  );
};

export const resetPassword = async (resetPasswordPayload: IAuthPayload) => {
  return axiosFetch(false).post(
    `${configs.baseURL}/auth/reset-password`,
    resetPasswordPayload
  );
};

export const verifyAccount = async (verifyAccountPayload: IAuthPayload) => {
  return axiosFetch(false).post(
    `${configs.baseURL}/auth/verify-account`,
    verifyAccountPayload
  );
};

export const googleLogin = async () => {
  return axiosFetch(false).get(`${configs.baseURL}/auth/login/google`);
};
