import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const sendMessageKonsul = (idKonsul, data) => {
    return axiosInstance.post(`${url.ENDPOINT_KONSUL_MESSAGE}/${idKonsul}`, data);
}