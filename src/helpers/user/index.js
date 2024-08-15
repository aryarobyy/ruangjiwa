import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const postUser = async (data) => {
    try {
        axiosInstance.post(`${url.ENDPOINT_USER}`, data);
    } catch (error) {
        
    }
}