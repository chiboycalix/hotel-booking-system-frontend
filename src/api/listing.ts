import {axiosFetch} from "../configs";
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
  return axiosFetch().get(`/listing/all`);
};

export const updateListing = async ({ id, ...rest }: IListing) => {
  return axiosFetch().put(`/listings/${id}`, rest, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export const createListing = async (payload: IListing) => {
  return axiosFetch().post(`/listings`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export const deleteListing = async ({ id }: IListing) => {
  return axiosFetch().delete(`/listings/${id}`);
};