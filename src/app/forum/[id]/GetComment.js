// "use client";

// // import { getCommentByForumId } from '@/helpers/comment';
// import React, { useEffect, useState } from 'react';
// import Comment from '@/components/Comments';

// const GetComment = ({ forumIds }) => {
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Re-fetch comments if forumIds change
//     if (forumIds) {
//       getComment();
//     }
//   }, [forumIds]);

//   const getComment = async () => {
//     try {
//       const res = await getCommentByForumId(forumIds);
//       console.log("Fetched comments:", res.data.data);
//       setComments(res.data.data);
//     } catch (error) {
//       console.error("Error fetching comments:", error.message);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading comments...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {comments.length > 0 ? (
//         <Comment comments={comments} lastReply={false} /> 
//       ) : (
//         <p>No comments found.</p>
//       )}
//     </div>
//   );
// };

// export default GetComment;
"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { getComment } from "@/helpers/forum";

const CommentsSection = ({ lastReply }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await getComment(); // Assuming getComment is an async function
        setComments(res.data.data);
      } catch (error) {
        console.error("Error fetching comments:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

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

CommentsSection.propTypes = {
  lastReply: PropTypes.bool,
};

export default CommentsSection;
