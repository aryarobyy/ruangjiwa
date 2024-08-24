import React from 'react'
import { mongoGetAllPdf, mongoPostPdf } from '@/mongoMethods/pdf'
import { v4 as uuidv4 } from "uuid";

export const POST = async (req) => {
 try{
    const data = await req.json();
    const uuid = uuidv4()

    const newData = {...data, pdfId :uuid}

    await mongoPostPdf(newData)
    return Response.json({
        message: "Success"
    })
 } catch (e){
    throw new Error (e.message)
 }
}


export const GET = async () => {
    try {
        const response = await mongoGetAllPdf();

        return Response.json({
            message: "Success",
            data: response
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed",  
            data: []
        })
    }
}

