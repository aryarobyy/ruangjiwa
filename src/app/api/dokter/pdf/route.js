import React from 'react'
import { mongoGetAllPdf, mongoPostPdf } from '@/mongoMethods/pdf'
import { v4 as uuidv4 } from "uuid";
import upload from "@/mongoMethods/gridfs";
import { NextResponse } from 'next/server';
import { GridFSBucket, ObjectId } from 'mongodb';

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


// export const POST = async (req) => {
//     try {
//       // Create a new Promise to handle the file upload
//       const uploadPromise = new Promise((resolve, reject) => {
//         upload.single('file')(req, null, (err) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(req.file);
//           }
//         });
//       });
  
//       const file = await uploadPromise;
  
//       if (!file) {
//         return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
//       }
  
//       return NextResponse.json({ fileId: file.id, filename: file.filename });
//     } catch (error) {
//       console.error('Error:', error.message);
//       return NextResponse.json({ message: 'Failed to upload file' }, { status: 500 });
//     }
//   };


// export const GET = async (req) => {
//   try {
//     const { searchParams } = new URL(req.url);
//     const pdfId = searchParams.get('id');

//     if (!pdfId) {
//       return NextResponse.json({ error: 'PDF ID not provided' }, { status: 400 });
//     }

//     const { database } = await connectDb();
//     const bucket = new GridFSBucket(database, { bucketName: 'pdfs' });

//     const downloadStream = bucket.openDownloadStream(new ObjectId(pdfId));

//     const headers = {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': `attachment; filename="${pdfId}.pdf"`,
//     };

//     return new NextResponse(downloadStream, { headers });
//   } catch (e) {
//     console.error('Error retrieving PDF:', e);
//     return NextResponse.json({ error: 'Error retrieving PDF' }, { status: 500 });
//   }
// };
