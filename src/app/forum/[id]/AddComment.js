"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { getComment } from "@/helpers/forum";
import { useAuth } from "@/context/AuthContext";

const CommentsSection = ({ forumId, lastReply }) => {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      if (!forumId) {
        console.error("No forumId provided");
        return;
      }

      try {
        console.log("forumId", forumId); 
        const res = await getComment(forumId); 
        console.log("data:", res.data.data.comments);

        if (Array.isArray(res.data.data.comments)) {
          setComments(res.data.data.comments);
        } else {
          setComments([]);  
        }
      } catch (error) {
        console.error("error:", forumId, error.message);
        setError(error.message);
        setComments([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [forumId]); 

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {comments.map((comment, index) => (
        <div key={comment.commentId || index} className="flex gap-4 py-2 my-2 w-full">
          <Image
            src={user.profilePic || "/default-profile-pic.png"}
            alt={`${comment.createdBy || 'User'}'s profile`}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center w-full">
              <span className="text-sm font-bold">{comment.createdBy || 'Unknown User'}</span>
            </div>
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
      {!lastReply && <hr className="border-t my-2" />}
    </>
  );
};

CommentsSection.propTypes = {
  forumId: PropTypes.string.isRequired,
  lastReply: PropTypes.bool,
};

export default CommentsSection;
