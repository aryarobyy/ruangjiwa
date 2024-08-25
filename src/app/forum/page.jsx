// "use client"

// import React, { useEffect, useState } from 'react';
// import { MdDeleteOutline } from "react-icons/md";
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/context/AuthContext';
// import Image from 'next/image';
// import { getAllForum } from '@/helpers/forum';
// import Navbar from '@/components/Navbar';

// const Page = () => {
//     const { user } = useAuth();
//     const navigate = useRouter();
//     const [forums, setForums] = useState([]);

//     useEffect(() => {
//         getForum();
//     }, []);

//     const getForum = async () => {
//         try {
//             const response = await getAllForum();
//             setForums(response.data.data);
//         } catch (error) {
//             console.error(error.message);
//         } 
//     };

//     const handleDeletePost = (forumId) => {
//         const newForums = forums.filter(item => item.forumId !== forumId);
//         setForums(newForums);
//     };

//     return (
//         <>
//         <Navbar />
//         <div className='block mb-4 py-5'>
//             {forums.map((forum) => (
//                 <div key={forum.forumId} className="flex flex-col items-center">
//                     <div className="flex-1 flex flex-col gap-2">
//                         <div className="flex justify-between w-full">
//                             <div className="flex items-center w-full">
//                                 {/* <Image src={user.profilePic}/> */}
//                                 <p //tambahin avatar nanti
//                                     className="text-b font-bold cursor-pointer"
//                                     onClick={(e) => {
//                                         e.preventDefault();
//                                         // navigate.push(`/${forum.username}`);
//                                     }}
//                                 >
//                                     {forum.postedBy}
//                                 </p>
//                                 {/* <img src="/verified.png" className="w-4 h-4 ml-1" alt="verified" /> */}
//                             </div>
//                             <div className="flex gap-4 items-center">
//                                 {/* <p className="text-xs w-36 text-right text-gray-400">
//                                     {new Date(forum.createdAt).toLocaleDateString()} ago
//                                 </p> */}
//                                 {user?.userId === forum.userId && (
//                                     <MdDeleteOutline
//                                         className="cursor-pointer"
//                                         onClick={() => handleDeletePost(forum.forumId)}
//                                     />
//                                 )}
//                             </div>
//                         </div>
//                         <p className="text-sm">{forum.content}</p>
//                         {forum.forumImage && (
//                             <div className="rounded overflow-hidden border border-gray-300">
//                                 <Image src={forum.forumImage} alt="post" className="h-500 w-200" width={400} height={400} />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             ))}
//         </div>
//         </>

//     );
// };

// export default Page;


"use client"
import { useEffect, useState } from "react";
// import { formatDistanceToNow } from "date-fns";
// import { DeleteIcon } from "@chakra-ui/icons";
// import Comment from "../components/Comment";
import { getAllForum } from "@/helpers/forum";
import { useAuth } from "@/context/AuthContext";

const PostPage = () => {
    const {user} = useAuth()
  const [post, setPost] = useState(null);

  useEffect(() => {
    getForum()
  }, [])
  const getForum = async () => {
    try {
    const res = await getAllForum()
    setPost(res.data.data)
    } catch (error) {
        console.error(error.message)
    }
  }

  if (!post)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 rounded-full animate-spin"></div>
      </div>
    );

//   const postDate = new Date(post.createdAt);
//   const formattedDate = isNaN(postDate)
//     ? "Invalid date"
//     : formatDistanceToNow(postDate);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={post.ProfilePic}
            alt={post.photo}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold">{user.username}</span>
            <img src="/verified.png" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {/* <span className="text-xs w-36 text-right text-gray-500">
            {formattedDate} ago
          </span> */}
          {/* {loggedInUser?._id === post.user_id && (
            <DeleteIcon
              size={20}
              cursor="pointer"
              onClick={handleDeletePost}
              className="text-red-500 hover:text-red-700 cursor-pointer"
            />
          )} */}
        </div>
      </div>

      <p className="my-3">{post.content}</p>

      {post.img && (
        <div className="rounded overflow-hidden border border-gray-300 mb-3">
          <img src={post.img} alt="Post Image" className="w-full" />
        </div>
      )}

      {/* <div className="flex gap-3 my-3">
        <Actions post={post} />
      </div> */}

      <hr className="my-4" />

      <div className="flex justify-between items-center my-4">
        <div className="flex gap-2 items-center">
          <span className="text-2xl">👋</span>
          <span className="text-gray-500">Get the app to like, reply, and post.</span>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Get
        </button>
      </div>

      <hr className="my-4" />

      {/* {post.replies &&
        post.replies.map((reply) => (
          <Comment
            key={reply._id}
            reply={reply}
            lastReply={reply._id === post.replies[post.replies.length - 1]._id}
          />
        ))} */}
    </div>
  );
};

export default PostPage;
