// import { mongoGetPdfById } from "@/mongoMethods/pdf";

// export const GET = async (req, {params}) => {
//     try {
//         const pdfId = params.id;

//         const response = await mongoGetPdfById(pdfId);

//         return Response.json({
//             message: "Success",
//             data: response
//         });
//     } catch (error) {
//         console.error(error.message);
//         return Response.json({
//             message: "Error",  
//             data: []
//         })
//     }
// }
import { NextResponse } from 'next/server';
import { GridFSBucket } from 'mongodb';
import { mongoGetPdfById } from '@/mongoMethods/pdf';

export const GET = async (req) => {
  try {
    // Extract pdfId from the request URL
    const { searchParams } = new URL(req.url);
    const pdfId = searchParams.get('pdfId');

    if (!pdfId) {
      return NextResponse.json({ error: 'PDF ID not provided' }, { status: 400 });
    }

    // Use the mongoGetPdfById function to find the PDF
    const pdfDocument = await mongoGetPdfById(pdfId);

    if (!pdfDocument) {
      return NextResponse.json({ error: 'PDF not found' }, { status: 404 });
    }

    // Retrieve MongoDB database
    const { database } = await connectDb();
    const bucket = new GridFSBucket(database, { bucketName: 'pdfs' });

    // Create a download stream from GridFS
    const downloadStream = bucket.openDownloadStreamByName(pdfId);

    // Set headers for PDF download
    const headers = new Headers({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${pdfId}.pdf"`,
    });

    // Use native Node.js Response to handle the stream
    return new Response(downloadStream, {
      headers,
    });
  } catch (e) {
    console.error('Error retrieving PDF:', e);
    return NextResponse.json({ error: 'Error retrieving PDF' }, { status: 500 });
  }
};
