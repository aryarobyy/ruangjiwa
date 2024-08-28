import * as url from '../endpointUrl';
import axiosInstance from "@/libs/axiosInterface"

export const getActivities = async (id) => {
    return axiosInstance.get(`${url.ENDPOINT_ACTIVITIE}/${id}`)
}

export const getAllActivitie = async () => {
    return axiosInstance.get(`${url.ENDPOINT_ACTIVITIE}`)
}