"use client";
import { useEffect, useState } from "react";
import { getAllForum } from "@/helpers/forum";
import { useAuth } from "@/context/AuthContext";
import Forum from "@/components/Forum";
import Navbar from "@/components/Navbar";
import Link from "next/link";

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

  return (
    <>
      <Navbar />
      <div className="bg-[var(--hero-bg-color)] min-h-screen flex justify-center relative">
        <div className="max-w-2xl w-full">
          <div className="bg-[var(--chat-bg)] p-4 border-b border-gray-200 sticky top-0 z-10 rounded-t shadow-lg">
            <h2 className="text-xl font-semibold text-[var(--title-color)]">
              Home
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {forums.map((forum) => (
              <div
                key={forum.forumId}
                className="p-4 bg-[var(--box-chat)] rounded-b"
              >
                <Forum forum={forum} user={user} />
              </div>
            ))}
          </div>
        </div>

        {/* Add Post Button */}
        <Link href="/forum/add">
          <button
            className="fixed bottom-4 right-4 bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-bg-color)] text-white font-bold py-2 px-4 rounded-2xl shadow-lg transition duration-300"
            aria-label="Add Post"
          >
            +
          </button>
        </Link>
      </div>
    </>
  );
};

export default PostPage;
