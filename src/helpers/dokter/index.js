import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const registerDokter = async (data) => {
    return axiosInstance.post(`${url.ENDPOINT_DOKTER}/register`, data)
}

export const deleteDokter = async (username) => {
    return axiosInstance.get(`${url.ENDPOINT_DOKTER}/${username}`);
}

export const getAllDokter = async () => {
    return axiosInstance.get(`${url.ENDPOINT_DOKTER}`);
}

export const getDokterByUsername = async (username) => {
    return axiosInstance.get(`${url.ENDPOINT_DOKTER}/${username}`)
}

export const updateApprovedDokter = async (username) => {
    return axiosInstance.put(`${url.ENDPOINT_DOKTER}/${username}`)
}

export const getArtikelByDokter = async (creatorId) => {
    return axiosInstance.get(`${url.ENDPOINT_DOKTER}/artikel/${creatorId}`)

}

export const updateDokter = async (data) => {
    return axiosInstance.put(`${url.ENDPOINT_DOKTER}/update`, data);
}