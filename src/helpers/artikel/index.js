import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const getAllArtikel = async () => {
    return axiosInstance.get(`${url.ENDPOINT_ARTIKEL}`);
};

export const postNewArtikel = async (data) => {
    return axiosInstance.post(`${url.ENDPOINT_ARTIKEL}`,
        data
    );
};

export const getArtikelById = async (artikelId) => {
    return axiosInstance.get(`${url.ENDPOINT_ARTIKEL}/${artikelId}`)
};