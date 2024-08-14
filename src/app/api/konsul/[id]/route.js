import axiosInstance from "@/libs/axiosInterface";
import { getKonsulMessage } from "@/mongoMethods/chatKonsul";
import { getKonsulById } from "@/mongoMethods/konsul";
import axios from "axios";

export const GET = async (req, {params}) => {
    try {
        const konsulId = params.id;

        const response = await getKonsulById(konsulId);
        const { data } = await axiosInstance.get(`/api/chat/konsul/${konsulId}`)
        console.log(data);

        return Response.json({
            message: "Success",
            data: {
                ...response,
                messages: data.data
            }
        });

    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed",
            data: null
        })
    }
};

