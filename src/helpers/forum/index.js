import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const addForum = (data) => {
  return axiosInstance.post(`${url.ENDPOINT_FORUM}`, data)
}

export const getAllForum = () => {
  return axiosInstance.get(`${url.ENDPOINT_FORUM}`)
}

export const getForumById = (forumId) => {
  return axiosInstance.get(`${url.ENDPOINT_FORUM}/${forumId}`)
}

export const addComment = (forumId, data) => {
  return axiosInstance.post(`${url.ENDPOINT_FORUM}/${forumId}/comment`, data)
}

export const getComment = (forumId,commentId) => {
  return axiosInstance.get(`${url.ENDPOINT_FORUM}/${forumId}/comment=${commentId}`)
}