import Image from "next/image";
import Link from "next/link";
import { topPerformers } from "../../app/(protected)/admin/dashboard/data";
import { LuLogOut, LuMoreVertical, LuPencil, LuTrash2 } from "react-icons/lu";
import { Eye, SquarePen, UserCog } from "lucide-react";
import BlogCard from "@/components/adminComponent/BlogCard";
import { artikel } from "./data";
// import BlogCard from "../BlogCard";

// daftar list yg register dokter
// daftar dokter
// daftar user

const BlogSection = ({title, type}) => {
  return (
    <div className="rounded-md border border-default-200 bg-white dark:bg-default-50 w-full">
      <div className="border-b border-default-200 px-6 py-3 text-center">
        <h4 className="text-lg text-dark">{title}</h4>
      </div>
      <div className="h-[500px] scroll-smooth p-2 overflow-y-auto [&::-webkit-scrollbar-track]:!bg-transparent [&::-webkit-scrollbar]:w-1 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {artikel.map((data, idx) => {
          return (
            <BlogCard key={idx} itemId={data.artikelId} itemImage={data.image} itemTitle={data.title} />
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
