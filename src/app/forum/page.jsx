"use client"
import { useEffect, useState } from "react";
import { getAllForum } from "@/helpers/forum";
import { useAuth } from "@/context/AuthContext";
import Forum from "@/components/Forum";
import Comment from "@/components/Comments";

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

//comment

  return (
      <div>
          {forums.map((forum) => (
              <Forum key={forum.forumId} forum={forum} user={user} />
          ))}
      </div>
  );
};

export default PostPage;