import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"
import axios from 'axios';

// export const postUser = async (data) => {
//     try {
//         const response = axiosInstance.post(`${url.ENDPOINT_USER}`, data);
//         console.log(response)
//         return response.data;
//     } catch (error) {
//         console.error("Error posting user:", error);
//     }
// }

export const postUser = async (data) => {
    try {
        const response = await axiosInstance.post(`${url.ENDPOINT_USER}`, data);
        return response.data;  
    } catch (error) {
        console.error("Error posting user:", error);
        throw error; 
    }
}

export const editUser = async (data) => {
    try {
        const response = await axiosInstance.put(`${url.ENDPOINT_USER}`, data)
        return response.data
    } catch (error) {
        console.error("Error posting user:", error);
        throw error; 
    }
}

export const getUser = async () => {
        return axiosInstance.get(`${url.ENDPOINT_USER}`)
};

export const getUserById = async (userId) => {
    return axiosInstance.get(`${url.ENDPOINT_USER}/${userId}`)
}