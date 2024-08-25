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

// export default Page;"use client";
"use client"
import { useEffect, useState } from "react";
import { getAllForum } from "@/helpers/forum";
import { useAuth } from "@/context/AuthContext";
import Forum from "@/components/Forum";

const PostPage = () => {
  const { user } = useAuth();
  const [forums, setForums] = useState([]);

  useEffect(() => {
      getForum();
  }, []);

  const getForum = async () => {
      try {
          const res = await getAllForum();
          console.log(res.data.data); 
          setForums(res.data.data);
      } catch (error) {
          console.error(error.message);
      }
  };

  if (!forums.length) {
      return (
          <div className="flex justify-center items-center h-screen">
              <div className="w-12 h-12 border-4 border-gray-300 rounded-full animate-spin"></div>
          </div>
      );
  }

  return (
      <div>
          {forums.map((forum) => (
              <Forum key={forum.forumId} forum={forum} user={user} />
          ))}
      </div>
  );
};

export default PostPage;