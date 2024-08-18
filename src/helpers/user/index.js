import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const getUserById = async (userId) => {
    return axiosInstance.get(`${url.ENDPOINT_USER}/${userId}`)
}

export const registerUser = async (data) => {
    return axiosInstance.post(`${url.ENDPOINT_USER}/register`, data);
}

export const updateUser = async (data) => {
    return axiosInstance.put(`${url.ENDPOINT_USER}/update`, data);
}

export const getUserByUsername = async (username) => {
    return axiosInstance.get(`${url.ENDPOINT_USER}/${username}`);
}