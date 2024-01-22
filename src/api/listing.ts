import axiosInstance from "../configs";
import { IListing } from "../interface/listing";

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

export const getAllListings = async () => {
  return axiosInstance.get(`/listing/all`);
};

export const updateListing = async ({ id, ...rest }: IListing) => {
  return axiosInstance.put(`/listings/${id}`, rest, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export const createListing = async (payload: IListing) => {
  return axiosInstance.post(`/listings`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}


export const deleteListing = async ({ id }: IListing) => {
  return axiosInstance.delete(`/listings/${id}`);
};