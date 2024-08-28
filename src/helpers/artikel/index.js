import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const getAllArtikel = async () => {
    return axiosInstance.get(`${url.ENDPOINT_ARTIKEL}`);
};

export const postNewArtikel = async (data, username) => {
    return axiosInstance.post(`${url.ENDPOINT_ARTIKEL}`, {
        data,
        username
    }
    );
};

export const updateArtikel = async (artikelId, data) => {
    return axiosInstance.put(`${url.ENDPOINT_ARTIKEL}/${artikelId}`, data)
}

export const getArtikelById = async (artikelId) => {
    return axiosInstance.get(`${url.ENDPOINT_ARTIKEL}/${artikelId}`)
};

export const deleteArtikelById = async (artikelId) => {
    return axiosInstance.delete(`${url.ENDPOINT_ARTIKEL}/${artikelId}`)
}

export const deleteAllArtikel = async () => {
    return axiosInstance.delete(`${url.ENDPOINT_ARTIKEL}`)
};
