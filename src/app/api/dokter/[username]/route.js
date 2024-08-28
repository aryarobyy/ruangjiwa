import { mongoDeleteDokterByUsername, mongoGetDokterByUsername, mongoUpdateApproved } from "@/mongoMethods/dokter";
import { mongoGetUserById } from "@/mongoMethods/user";

export const GET = async (req, {params}) => {
    try {
        const username = params.username;

        const response = await mongoGetDokterByUsername(username);

        return Response.json({
            message: "Success",
            data: response
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Error",  
            data: []
        })
    }
}

export const PUT = async (req, {params}) => {
    try {
        const username = params.username;

        await mongoUpdateApproved(username);
        
        return Response.json({
            message: "Success"
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Error",  
            data: []
        })
    }
}

export const DELETE = async (req, {params}) => {
    try {
        const username = params.username;
        await mongoDeleteDokterByUsername(username);
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Error",  
        })
        
    }
}