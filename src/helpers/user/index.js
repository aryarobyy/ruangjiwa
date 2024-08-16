import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const postUser = async (data) => {
    try {
        axiosInstance.post(`${url.ENDPOINT_USER}`, data);
    } catch (error) {
        
    }
}

export const getUser = async () => {
    return axiosInstance.get(`${url.ENDPOINT_USER}`);
};

export const getUserById = async (userId) => {
    return axiosInstance.get(`${url.ENDPOINT_USER}/${userId}`)
}