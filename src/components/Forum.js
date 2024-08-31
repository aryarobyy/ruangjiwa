import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { dateConvert } from "@/utils/dateConvert";

const Forum = ({ forum }) => {
  const {user} = useAuth();
  const router = useRouter();
  return (
    <div
      key={forum.forumId}
      className="flex gap-3 mb-4 p-4 py-5 hover:shadow-md rounded-md border border-[var(--border-color)]"
    >
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <Link href={`/profile/${forum.postedBy}`}>
            <div className="flex items-center w-full">
              <Image
                src={forum.profilePic || "/avatar.jpg"}
                className="w-8 h-8 rounded-full mr-2"
                alt="verified"
                width={400}
                height={400}
              />
              <p
                className="text-sm font-bold cursor-pointer "
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/profile/${forum.postedBy}`);
                }}
              >
                {forum.postedBy}
              </p>
            </div>
          </Link>

          <div className="flex gap-4 items-center">
            <p className="text-xs w-36 text-right text-gray-400">
              {
                dateConvert(forum.date)
              }
            </p>
          </div>
        </div>
        <Link href={user ? `/forum/${forum.forumId}` : "/auth/login"}>
          <div>
            <h1 className="font-bold text-lg mb-2">
              {forum.title.length > 100
                ? `${forum.title.slice(0, 100)}...`
                : forum.title}
            </h1>
            <p className="text-sm">
              {forum.content.length > 200
                ? `${forum.content.slice(0, 200)}`
                : forum.content}
            </p>
          </div>
          {forum.forumImage && (
            <div className="rounded overflow-hidden w-full h-64 relative">
              <Image
                src={forum.forumImage}
                alt="post"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Forum;
