// PostPage.jsx
"use client";
import { useEffect, useState } from "react";
import { getAllForum } from "@/helpers/forum";
import { useAuth } from "@/context/AuthContext";
import Forum from "@/components/Forum";
import Navbar from "@/components/Navbar";

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
    <div className="bg-gray-50 min-h-screen flex justify-center">
      <div className="max-w-2xl w-full">
        <div className="divide-y divide-gray-200">
          {forums.map((forum) => (
            <div key={forum.forumId} className="p-4 bg-white">
              <Forum forum={forum} user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default PostPage;
