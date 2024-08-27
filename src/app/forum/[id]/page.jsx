"use client";

import { useAuth } from '@/context/AuthContext';
import { getForumById } from '@/helpers/forum';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AddComment from '@/app/forum/[id]/AddComment';
import GetComment from './GetComment'; // Ensure this path is correct

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
      console.log("Forum data", res.data.data);
      setForum(data);
    } catch (error) {
      console.error("Error fetching forum:", error.message);
    }
  };

  if (!forum) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <Image
            src={user?.profilePic || "/avatar.jpg"}
            alt="Profile"
            className="w-8 h-8 rounded-full"
            width={120}
            height={120}
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold">{forum.postedBy}</span>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">{forum.title}</h1>
      <p className="mb-2 text-gray-700">{forum.content}</p>
      {forum.forumImage && (
        <Image
          src={forum.forumImage}
          alt="Forum Image"
          className="mb-4"
          width={400}
          height={400}
        />
      )}
      <div className="text-sm text-gray-500">
        Posted by: {forum.postedBy} on {new Date(forum.date).toLocaleDateString()}
      </div>
      <GetComment />
      <AddComment forumId={id} />
    </div>
  );
}

export default Page;
