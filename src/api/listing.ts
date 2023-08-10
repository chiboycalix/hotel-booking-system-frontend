import axios from "axios";
import { configs } from "../configs";

interface AxiosError {
  response: {
    data: {
      data: {
        error: string
      }
    }
  }
}
export interface IUseListingMutation {
  mutate: (payload: any) => void;
  isLoading: boolean
  isError: boolean
  error: AxiosError | null
  isSuccess: boolean
}

export const getAllListings = async () => {
  return axios.get(`${configs.baseURL}/listings`);
};