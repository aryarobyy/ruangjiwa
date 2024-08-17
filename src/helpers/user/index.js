import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const getUserById = async (userId) => {
    return axiosInstance.get(`${url.ENDPOINT_USER}/${userId}`)
}

export const registerUser = async (data) => {
    return axiosInstance.post(`${url.ENDPOINT_USER}/register`, data);
}

export const updateUser = async (userId) => {
    return axiosInstance.put(`${url.ENDPOINT_USER}/${userId}`, data);
}