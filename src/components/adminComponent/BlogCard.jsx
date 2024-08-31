"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import { dateConvert } from "@/utils/dateConvert";
import { deleteArtikelById } from "@/helpers/artikel";
import useToast from "@/hooks/useHotToast";

const BlogCard = ({ data, itemDescription, handleDeletedItem }) => {
  const date = dateConvert(data.date);
  const { pushToast, updateToast } = useToast();

  const handleDeleteArtikel = async () => {
    const toastId = pushToast({
      message: "Menghapus artikel...",
      isLoading: true,
    });
    try {
      const res = await deleteArtikelById(data.artikelId);
      if (res.data.message !== "Success")
        throw new Error("Gagal Menghapus Artikel!");

      handleDeletedItem(data.artikelId);
      updateToast({
        toastId,
        message: "Berhasil Menghapus Artikel!",
      });
    } catch (error) {
      console.error(error.message);
      updateToast({
        toastId,
        message: error.message,
        isError: true,
      });
    }
  };
  
  return (
    <div className="rounded-md border h-fit border-default-200 bg-white p-2">
      <div className="p-2 relative">
        <div className="flex w-full justify-between absolute top-0 right-0 left-0 z-40">
          <Button className={""}>
            <Link href={`/admin/artikel/edit/${data.artikelId}`}>
              <SquarePen size={15} />
            </Link>
          </Button>
          <Button.danger onClick={handleDeleteArtikel} className={""}>
            <Trash2 size={15} />
          </Button.danger>
        </div>
        <div className="rounded-md overflow-hidden">
          <Image
            src={data.imgUrl}
            width={500}
            height={700}
            onLoad={(e) => e.target.className + " border-2 blur-md"}
            className="object-cover rounded-md hover:scale-105 transition-all ease-in-out duration-300 h-52"
            alt={data.title}
          />
          <div className="w-full py-4">
            <Link href={`/artikel/${data.artikelId}`}>
              <div className="text-sm flex justify-between pb-2">
                <p>{date}</p>
                <p>{`${data.name}`}</p>
              </div>
              <h1 className="w-full text-base text-center text-default-600 font-semibold">
                {` ${
                  data.title.length > 65
                    ? `${data.title.slice(0, 65)}...`
                    : data.title
                }`}
              </h1>
              <p className="w-full py-2 text-justify text-sm text-default-600 font-medium">
                {itemDescription}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
