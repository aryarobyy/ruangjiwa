"use client";

import { useAuth } from "@/context/AuthContext";
import { getForumById } from "@/helpers/forum";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AddComment from "@/app/forum/[id]/AddComment";
import GetComment from "./GetComment";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Page = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [forum, setForum] = useState(null);

  useEffect(() => {
    getForum();
  }, []);

  const getForum = async () => {
    try {
      const res = await getForumById(id);
      const data = res.data.data;
      console.log(data);
      setForum(data);
    } catch (error) {
      console.error("Error fetching forum:", error.message);
    }
  };

  if (!forum) {
    return <div className="text-center text-gray-500 mt-4">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 border border-gray-300 p-4 rounded-lg mb-4 md:mb-0 shadow-sm overflow-auto">
          <Link href={`/profile/${forum.postedBy}`}>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={forum?.profilePic || "/avatar.jpg"}
                alt="Profile"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
              <div>
                <span className="font-bold text-gray-900">
                  {forum.postedBy}
                </span>
                <div className="text-gray-500 text-sm">
                  {new Date(forum.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </Link>
          <h1 className="text-lg font-semibold mb-2">{forum.title}</h1>
          <p className="mb-4 text-gray-700">{forum.content}</p>
          {forum.forumImage && (
            <div className="rounded overflow-hidden border border-gray-300 w-full h-64 relative mb-4">
              <Image
                src={forum.forumImage}
                alt="Forum Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div className="text-sm text-gray-500 mb-4">
            Posted by: {forum.postedBy}
          </div>
        </div>
        <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-gray-300 p-4 md:pl-4 overflow-auto">
          <div className="flex-1 overflow-auto">
            <GetComment
              comments={forum.comments}
              forumId={forum.forumId}
              lastReply={false}
            />
          </div>
          <div className="sticky bottom-0 bg-white p-4 mt-10 border-t border-gray-300">
            <AddComment forumId={forum.forumId} setComments={setForum} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
