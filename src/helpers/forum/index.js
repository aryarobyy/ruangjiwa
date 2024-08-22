import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const addPost = (data) => {
  return axiosInstance.post(`${url.ENDPOINT_FORUM}`, data)
}

export const getPost = (forumId) => {
  return axiosInstance.get(`${url.ENDPOINT_FORUM}/forum`, forumId)
}