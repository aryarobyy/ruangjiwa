// PostPage.jsx
"use client";
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

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center">
      <div className="max-w-2xl w-full">
        <div className="bg-white p-4 border-b border-gray-200 sticky top-0 z-10">
          <h2 className="text-xl font-semibold">Home</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {forums.map((forum) => (
            <div key={forum.forumId} className="p-4 bg-white">
              <Forum forum={forum} user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
