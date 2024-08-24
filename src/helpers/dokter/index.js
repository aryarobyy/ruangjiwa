import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const postPdf = (data) => {
    return axiosInstance.post(`${url.ENDPOINT_PDF}`, data)
}

export const getAllPdf = () => {
    return axiosInstance.get(`${url.ENDPOINT_PDF}`)
}

export const getPdfById = async (pdfId) => {
    return axiosInstance.get(`${url.ENDPOINT_PDF}/${pdfId}`)
};