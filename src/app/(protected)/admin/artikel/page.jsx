"use client";
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import BlogSection from "@/components/adminComponent/BlogSection";
import { Input } from "@/components/ui/Input";
import { getAllArtikel } from "@/helpers/artikel";
import { useEffect, useState } from "react";

const tempData = [
  {
    "_id": "66c4291d22705d84426c7e84",
    "title": "Judul Artikel ke 1",
    "description": "                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam, illo alias ipsum qui dolorum optio reiciendis omnis! Optio quod fugit quam impedit vero labore accusamus? Tenetur ab iste quo?\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iure distinctio enim, obcaecati dicta doloribus numquam vel vitae ducimus mollitia illum nemo rem quos? Quis, deleniti? Voluptatem ducimus vel illo.\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad eius quidem fugit sequi fugiat obcaecati harum temporibus, totam in aperiam omnis aut cumque facere! Dolore earum expedita ducimus labore?",
    "imgUrl": "https://res.cloudinary.com/dcpxbtbaz/image/upload/v1724131611/pw7optfhahfpakuy5phl.png",
    "creatorId": "7be0906f-9fdf-4aac-9b51-baad17a0c1b8",
    "name": "Irzi",
    "date": "2024-08-20T05:26:38.127Z",
    "artikelId": "6c46c36e-a648-49f3-b713-f3c59465960c"
}
]

const AdminArtikel = () => {
  const [ artikels, setArtikels ] = useState([]);
  const [loadingGetData, setLoadingGetData] = useState(false);

  useEffect(() => {
      // getArtikelData();
  }, []);
  
  const getArtikelData = async () => {
    setLoadingGetData(true);
    try {
      const response = await getAllArtikel();
      setArtikels(response.data.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoadingGetData(false);
    }
  };

  const handleDeletedArtikel = (artikelId) => {
    const newArtikel = artikels.slice('').filter(item => item.artikelId !== artikelId);
    console.log(newArtikel);
  }

  return (
    <div className="text-dark bg-primary border-2 border-white pb-6">
      <AdminBreadcrumb title={"Artikel"} />
      <div className="px-8">
        <BlogSection data={tempData} title={"List Artikel"} isGettingData={loadingGetData} type={"artikelPage"} onDeletedItem={handleDeletedArtikel} />
      </div>
    </div>
  );
};

export default AdminArtikel;
