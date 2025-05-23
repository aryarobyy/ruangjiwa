import { convertFileToBase64 } from '@/utils/convertFileToBase64';
import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const postFile = async (file) => {
    try {
        const newFile = await convertFileToBase64(file);
        return axiosInstance.post(`${url.ENDPOINT_FILE}`, newFile);
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);       
    }
}