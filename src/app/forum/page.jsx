// PostPage.jsx
"use client";
import { useEffect, useState } from "react";
import { getAllForum } from "@/helpers/forum";
import { useAuth } from "@/context/AuthContext";
import Forum from "@/components/Forum";
import Navbar from "@/components/Navbar";
import LoadingSection from "@/components/system/LoadingSection";
import Button from "@/components/ui/Button";
import Link from "next/link";

const PostPage = () => {
  const {user} = useAuth();
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getForum();
  }, []);

  const getForum = async () => {
    setLoading(true);
    try {
      const res = await getAllForum();
      setForums(res.data.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="w-full bg-[var(--hero-bg-color)] text-[var(--title-color)] h-screen flex items-center justify-center">
          <LoadingSection />
        </div>
      ) : !loading && (!forums || forums.length <= 1) ? (
        <div className="w-full h-screen justify-center items-center flex flex-col gap-4 bg-[var(--hero-bg-color)] text-[var(--title-color)]">
          <p className="w-full font-semibold text-center">
            Ops! Sepertinya belum terdapat forum untuk saat ini.
          </p>
          <Button>
            <Link href={"/"}>Kembali</Link>
          </Button>
        </div>
      ) : (
        <div className="bg-[var(--hero-bg-color)] min-h-screen flex justify-center p-4">
          <div className="w-full border border-[var(--border-color)] overflow-y-scroll">
            <div className="text-[var(--title-color)] h-screen grid md:grid-cols-2 gap-4 p-4 ">
              {forums.map((forum, idx) => (
                <Forum forum={forum} key={idx} />
              ))}
            </div>
            <div>
              <Link href={`${user ? "/forum/add" : "/auth/login"}`}>
                <button
                  className="fixed bottom-7 right-7 bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-bg-color)] text-[var(--title-color)] font-semibold py-2 px-4 rounded shadow-lg transition duration-300"
                  aria-label="Add Post"
                >
                  Tambah Forum
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostPage;
