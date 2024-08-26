import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const registerDokter = async (data) => {
    return axiosInstance.post(`${url.ENDPOINT_DOKTER}/register`, data)
}