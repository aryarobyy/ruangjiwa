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
import LoadingSection from "@/components/system/LoadingSection";
import Button from "@/components/ui/Button";

const Page = () => {
  const { id } = useParams();
  const [forum, setForum] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getForum();
  }, []);

  const getForum = async () => {
    setLoading(true);
    try {
      const res = await getForumById(id);
      const data = res.data.data;
      setForum(data);
    } catch (error) {
      console.error("Error fetching forum:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center bg-[var(--hero-bg-color)] text-[var(--title-color)]">
          <LoadingSection />
        </div>
      ) : !loading && (!forum || forum.length <= 1) ? (
        <div className="w-full h-screen justify-center items-center flex flex-col gap-4 bg-[var(--hero-bg-color)] text-[var(--title-color)]">
          <p className="w-full font-semibold text-center">
            Ops! Sepertinya forum yang anda pilih tidak ditemukan.
          </p>
          <Button>
            <Link href={"/forum"}>
              Kembali
            </Link>
          </Button>
        </div>
      ) : (
        <div className="w-full bg-[var(--hero-bg-color)] grid md:grid-cols-2 gap-4 p-4 min-h-screen">
          <div className="w-full p-4 shadow-sm overflow-auto text-[var(--title-color)] border border-[var(--border-color)] h-fit">
            <div>
              <div className=" mb-4 w-fit">
                <Link
                  href={`/profile/${forum.postedBy}`}
                  className="w-fit flex items-center gap-3"
                >
                  <Image
                    src={forum?.profilePic || "/avatar.jpg"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                  <div>
                    <span className="font-bold">{forum.postedBy}</span>
                    <div className="text-sm">
                      {new Date(forum.date).toLocaleDateString()}
                    </div>
                  </div>
                </Link>
              </div>
              {forum.forumImage && (
                <div className="rounded overflow-hidden border w-full h-64 relative mb-4">
                  <Image
                    src={forum.forumImage}
                    alt="Forum Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
            <div>
              <h1 className="text-lg font-semibold mb-2">{forum.title}</h1>
              <p className="mb-4">{forum.content}</p>
            </div>
          </div>
          <div className="w-full border border-[var(--border-color)] max-h-[70dvh] relative mb-[5rem] md:mb-0">
            <div className="flex flex-col gap-2 h-full overflow-y-scroll">
              <GetComment
                comments={forum.comments}
                forumId={forum.forumId}
                lastReply={false}
              />
            </div>
            <div className="-bottom-1 p-4 bg-[var(--hero-bg-color)] border border-[var(--border-color)]">
              <AddComment forumId={forum.forumId} setComments={setForum} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
