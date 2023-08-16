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
  mutate: (payload: {}) => void;
  isLoading: boolean
  isError: boolean
  error: AxiosError | null
  isSuccess: boolean
}

export const getUser = async ({id}: {id:string}) => {
  return axios.get(`${configs.baseURL}/users/${id}`);
};