"use client";

import React from 'react';
import PropTypes from "prop-types";
import Image from "next/image";

const Comment = ({ comments, lastReply }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={comment.commentId || index} className="flex gap-4 py-2 my-2 w-full">
          <Image
            src={comment.user.profilePic || "/default-profile-pic.png"} // Fallback profile pic
            alt={`${comment.user.username}'s profile`}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center w-full">
              <span className="text-sm font-bold">{comment.user.username}</span>
            </div>
            <p>{comment.text}</p>
          </div>
        </div>
      ))}
      {!lastReply && <hr className="border-t my-2" />}
    </>
  );
};

Comment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      profilePic: PropTypes.string,
    }).isRequired,
    text: PropTypes.string.isRequired,
    commentId: PropTypes.string, // Optional: Assuming commentId is a string
  })).isRequired,
  lastReply: PropTypes.bool,
};

export default Comment;
