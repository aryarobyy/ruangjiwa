"use client";

import React, { useState } from 'react';
import { Input } from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import useToast from '@/hooks/useHotToast';
import { addComment } from '@/helpers/forum';

const AddComment = ({ forumId }) => { 
  const MAX_COMMENT_CHAR = 600;

  const [comment, setComment] = useState(""); 
  const { user } = useAuth();
  const { pushToast, updateToast } = useToast();

  const handleComment = (e) => {
    const inputComment = e.target.value;
    if (inputComment.length > MAX_COMMENT_CHAR) {
      const finalComment = inputComment.slice(0, MAX_COMMENT_CHAR);
      setComment(finalComment); 
    } else {
      setComment(inputComment);
    }
  };

  const handleSubmit = async () => {
    if (!forumId) {
      console.error("forumId is not defined");
      return;
    }

    const newComment = {
      comment: comment,
      createdBy: user.username || user.dokterId,
      name: user.name,
      date: new Date(),
    };

    console.log(newComment)
    const toastId = pushToast({
      message: "Uploading comment...",
    });

    try {
      const res = await addComment(forumId,newComment);
      if (res.data.message !== 'Success') throw new Error(res.data.message);

      updateToast({
        message: "Successfully uploaded comment!",
        toastId,
      });
      setComment(""); 
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
        placeholder="Drop your comment below"
        value={comment} 
        onChange={handleComment}
      />
      <Button 
        onClick={handleSubmit}
        className="w-full"
      >
        Submit
      </Button>
    </>
  );
};

export default AddComment;
