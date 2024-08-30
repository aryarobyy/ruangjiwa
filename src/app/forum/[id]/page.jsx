"use client";

import { useAuth } from '@/context/AuthContext';
import { getForumById } from '@/helpers/forum';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AddComment from '@/app/forum/[id]/AddComment';
import GetComment from './GetComment';
import Link from 'next/link';

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
    <div className="p-4 max-w-xl mx-auto">
      <div className="border border-gray-300 p-4 rounded-lg mb-4 shadow-sm">
      <Link href={`/profile/${forum.postedBy}`}>
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={user?.profilePic || "/avatar.jpg"}
            alt="Profile"
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <div>
            <span className="font-bold text-gray-900">{forum.postedBy}</span>
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
      <div className="border-t border-gray-300 pt-4">
        <GetComment forumId={forum.forumId} lastReply={false}/>
        <AddComment forumId={forum.forumId} />
      </div>
    </div>
  );
};

export default Page;
