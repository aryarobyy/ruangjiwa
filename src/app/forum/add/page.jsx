'use client';

import React, { useRef, useState } from 'react';
import { Input } from "@/components/ui/Input";
import InputImage from '@/components/system/InputImage';
import useToast from '@/hooks/useHotToast';
import Button from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { addForum } from '@/helpers/forum';
import { postImage } from '@/helpers/image';

const Page = () => {
  const MAX_TITLE_CHAR = 80;
  const MAX_CONTENT_CHAR = 600;
  
  const [tempImg, setTempImg] = useState("");
  const [file, setFile] = useState(""); 
  const { pushToast, updateToast } = useToast();
  const { user } = useAuth();

  const [remainingCharTitle, setRemainingCharTitle] = useState(MAX_TITLE_CHAR);
  const [remainingCharContent, setRemainingCharContent] = useState(MAX_CONTENT_CHAR);

  const [forum, setForum] = useState({
    title: '',
    content: '',
    forumImage: ''
  });

  const handleTitle = (e) => {
    const inputTitle = e.target.value;
    if (inputTitle.length > MAX_TITLE_CHAR) {
      const finalTitle = inputTitle.slice(0, MAX_TITLE_CHAR);
      setForum((prev) => ({ ...prev, title: finalTitle }));
      setRemainingCharTitle(0);
    } else {
      setForum((prev) => ({ ...prev, title: inputTitle }));
      setRemainingCharTitle(MAX_TITLE_CHAR - inputTitle.length);
    }
  };

  const handleContent = (e) => {
    const inputContent = e.target.value;
    if (inputContent.length > MAX_CONTENT_CHAR) {
      const finalContent = inputContent.slice(0, MAX_CONTENT_CHAR);
      setForum((prev) => ({ ...prev, content: finalContent }));
      setRemainingCharContent(0);
    } else {
      setForum((prev) => ({ ...prev, content: inputContent }));
      setRemainingCharContent(MAX_CONTENT_CHAR - inputContent.length);
    }
  };

  const handleImage = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      pushToast({
        message: "Tolong pilih gambar dulu..",
        isError: true
      });
      return;
    }

    setFile(selectedFile);
    const tempFile = URL.createObjectURL(selectedFile);
    setTempImg(tempFile);
  };

  const handleSubmit = async () => {
    if (!forum.title || !forum.content) {
      pushToast({
        message: "Judul dan Konten harus diisi",
        isError: true
      });
      return;
    }

    const forumData = {
      ...forum,
      userId: user?.userId || user?.dokterId,
      postedBy: user?.username,
      date: new Date(),
    };

    const toastId = pushToast({
      message: "Membuat post...",
      isLoading: true,
    });

    try {
      if (file) {
        const imagePath = await postImage(file);
        if (imagePath.data.message !== "Success") {
          throw new Error(imagePath.data.message);
        }
        forumData.forumImage = imagePath.data.data;
      } else {
        throw new Error("Mohon upload gambar");
      }

      const response = await addForum(forumData);
      if (response.data.message !== "Success") {
        throw new Error(response.data.message);
      }

      updateToast({
        toastId,
        message: "Sukses bikin post",
      });

      setForum({
        title: '',
        content: '',
        forumImage: '',
      });
      setRemainingCharTitle(MAX_TITLE_CHAR);
      setRemainingCharContent(MAX_CONTENT_CHAR);
      setTempImg(null); 
      setFile(null); 
    } catch (error) {
      updateToast({
        toastId,
        message: error.message,
        isError: true,
      });
    }
  };

  return (
    <>
      <Input 
        placeholder={`Judul (maks ${MAX_TITLE_CHAR} karakter)`}
        onChange={handleTitle} 
        value={forum.title}
      />
      
      <Input 
        placeholder={`Konten (maks ${MAX_CONTENT_CHAR} karakter)`}
        onChange={handleContent} 
        value={forum.content}
      />

      <InputImage title={"Post"} tempImg={tempImg} handleAddFileChange={handleImage} /> 

      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
};

export default Page;
