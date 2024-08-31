"use client";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import LoadingSection from "@/components/system/LoadingSection";
import Button from "@/components/ui/Button";
import { getAllArtikel, getArtikelById } from "@/helpers/artikel";
import { dateConvert } from "@/utils/dateConvert";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DetailArtikel = ({params}) => {
  const [artikel, setArtikel] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllArtikels = async () => {
      setLoading(true);
      try {
        const res = await getArtikelById(params.id);
        if (res.data.message !== "Success")
          throw new Error("Gagal memuat artikel!");

        setArtikel(res.data.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllArtikels();
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full p-8 bg-[var(--hero-bg-color)]">
        {loading ? (
          <div className="h-screen w-full flex items-center justify-center">
            <LoadingSection />
          </div>
        ) : !artikel ? (
          <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
            <h1 className="text-lg text-dark">
              Sepertinya artikel ini tidak tersedia
            </h1>
              <Button>
                  <Link href={"/artikel"}>Kembali</Link>
              </Button>
          </div>
        ) : (
          <div className="w-full p-10">
          <div>
            <h1 className="text-xl font-bold text-center mb-8 text-[var(--title-color)]">{artikel?.title}</h1>
          </div>
          <div className="flex justify-between items-center py-4 text-xs md:text-base font-semibold text-dark">
              <p className="text-[var(--title-color)]">{`Pada: ${dateConvert(artikel?.date)}`}</p>
              <p className="text-[var(--title-color)]">{`Oleh: ${artikel?.name}`}</p>
          </div>
          <div className="w-full text-justify flex flex-col justify-center items-center gap-8 md:block">
              <div className="md:float-end mx-8">
                  <Image className="rounded-md md:w-[20rem] lg:w-[25rem]" src={artikel?.imgUrl} alt={artikel.title} width={450} height={500} />
              </div>
              <p className="text-[var(--title-color)]">{artikel?.description}</p>
          </div>
          </div>
        )}
      </div>
    </>
  );
};
export default DetailArtikel;
