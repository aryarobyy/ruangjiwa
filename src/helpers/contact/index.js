import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const addContact = (data) => {
    return axiosInstance.post(`${url.ENDPOINT_CONTACT}`, data)
  }