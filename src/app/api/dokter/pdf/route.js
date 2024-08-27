import React from 'react'
import { mongoGetAllPdf, mongoPostPdf } from '@/mongoMethods/pdf'
import { v4 as uuidv4 } from "uuid";
import upload from "@/mongoMethods/gridfs";
import { NextResponse } from 'next/server';
import { GridFSBucket, ObjectId } from 'mongodb';

export const POST = async (req) => {
    try {
      const uploadPromise = new Promise((resolve, reject) => {
        upload.single('file')(req, null, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(req.file);
          }
        });
      });
    const pdf = await mongoPostPdf(uploadPromise)
  
      if (!pdf) {
        return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
      }
  
      return NextResponse.json({ pdfId: pdf.id, pdfName: pdf.pdfName });
    } catch (error) {
      console.error('Error:', error.message);
      return NextResponse.json({ message: 'Failed to upload file' }, { status: 500 });
    }
  };