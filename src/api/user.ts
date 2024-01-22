import axiosInstance from "../configs";

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
  return axiosInstance.get(`/users/${id}`);
};