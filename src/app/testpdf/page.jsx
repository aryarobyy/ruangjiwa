"use client"

import Button from '@/components/ui/Button';
import { postPdf } from '@/helpers/dokter';
import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log('File selected:', e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file');
      console.log('No file selected');
      return;
    }

    const formData = {
      ...file,
      date: new Date
    }

    console.log('FormData created:', formData);

    try {
      const res = await postPdf(formData);

      console.log('Response received:', res);

      if (res.ok) {
        const data = await res.json();
        console.log('Response data:', data);
        setMessage(`File uploaded successfully: ${data.filename}`);
      } else {
        console.log('Failed to upload file, response status:', res.status);
        setMessage('Failed to upload file');
      }
    } catch (error) {
      console.error('Error during file upload:', error);
      setMessage('Failed to upload file');
    }
  };

  return (
    <div>
      <h1>Upload PDF</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <Button type="submit">Upload</Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
