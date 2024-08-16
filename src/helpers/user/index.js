import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"
import axios from 'axios';

export const postUser = async (data) => {
    try {
        const response = await axios.post(`${url.ENDPOINT_USER}`, data);
        return response.data;  
    } catch (error) {
        console.error("Error posting user:", error);
        throw error; 
    }
}

export const getUser = async () => {
    return axiosInstance.get(`${url.ENDPOINT_USER}`);
};

export const getUserById = async (userId) => {
    return axiosInstance.get(`${url.ENDPOINT_USER}/${userId}`)
}