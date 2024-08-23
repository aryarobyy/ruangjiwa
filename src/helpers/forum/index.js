import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const addForum = (data) => {
  return axiosInstance.post(`${url.ENDPOINT_FORUM}`, data)
}

export const getAllForum = () => {
  return axiosInstance.get(`${url.ENDPOINT_FORUM}`)
}