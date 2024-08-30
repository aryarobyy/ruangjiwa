"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { getComment } from "@/helpers/forum";
import { useAuth } from "@/context/AuthContext";

const GetComment = ({ lastReply, comments }) => {
  const { user } = useAuth();
  // const [comments, setComments] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     if (!forumId) {
  //       console.error("Formnya gaada");
  //       return;
  //     }

  //     try {
  //       const res = await getComment(forumId); 

  //       if (Array.isArray(res.data.data.comments)) {
  //         setComments(res.data.data.comments);
  //       } else {
  //         console.error("Error Bang", error.message)
  //         setError(error.message)
  //         setComments([]);  
  //       }
  //     } catch (error) {
  //       console.error("error:", forumId, error.message);
  //       setError(error.message);
  //       setComments([]); 
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchComments();
  // }, [forumId]); 

  // if (loading) {
  //   return <div>Loading comments...</div>;
  // }

  return (
    <>
      {comments.map((comment, index) => (
        <div key={comment.commentId || index} className="flex gap-4 py-2 my-2 w-full">
          <Image
            src={comment.profilePic || "/avatar.jpg"}
            alt={`${comment.createdBy}'s profile`}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center w-full">
              <span className="text-sm font-bold">{comment.name}</span>
            </div>
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
      {!lastReply && <hr className="border-t my-2" />}
    </>
  );
};

GetComment.propTypes = {
  forumId: PropTypes.string.isRequired,
  lastReply: PropTypes.bool,
};

export default GetComment;
