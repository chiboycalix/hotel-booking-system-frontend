import axios from "axios";
import { configs } from "../configs";
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
  return axios.get(`${configs.baseURL}/listings`);
};

export const updateListing = async ({ id, ...rest }: IListing) => {
  return axios.put(`${configs.baseURL}/listings/${id}`, rest, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export const createListing = async (payload: IListing) => {
  return axios.post(`${configs.baseURL}/listings`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}


export const deleteListing = async ({ id }: IListing) => {
  return axios.delete(`${configs.baseURL}/listings/${id}`);
};