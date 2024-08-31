"use client";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import LoadingSection from "@/components/system/LoadingSection";
import { getAllArtikel } from "@/helpers/artikel";
import { useEffect, useState } from "react";

const article = () => {
  const [artikels, setArtikels] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllArtikels = async () => {
      setLoading(true);
      try {
        const res = await getAllArtikel();
        if (res.data.message !== "Success")
          throw new Error("Gagal memuat artikel!");

        setArtikels(res.data.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllArtikels();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-full p-8 bg-[var(--hero-bg-color)] text-dark">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--title-color)]">
          Artikel yang Bermanfaat untuk anda
        </h1>
        {loading ? (
          <div className="h-screen w-full flex items-center justify-center">
            <LoadingSection />
          </div>
        ) : !artikels || artikels.length < 0 ? (
          <div className="h-screen w-full flex items-center justify-center text-[var(--title-color)]">
            <h1 className="text-lg ">
              Sepertinya belum terdapat artikel
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {artikels?.map((item, idx) => (
              <BlogCard key={idx} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default article;
