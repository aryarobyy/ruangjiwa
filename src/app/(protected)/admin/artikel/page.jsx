"use client";
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import BlogSection from "@/components/adminComponent/BlogSection";
import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { getAllArtikel } from "@/helpers/artikel";
import Link from "next/link";
import { useEffect, useState } from "react";

const AdminArtikel = () => {
  const [ artikels, setArtikels ] = useState([null]);
  const [loadingGetData, setLoadingGetData] = useState(false);
  const {user} = useAuth();

  useEffect(() => {

    const getArtikelData = async () => {
      setLoadingGetData(true);
      try {
        const response = await getAllArtikel();
        if(response.data.message !== "Success") throw new Error("Sepertinya gagal memuat\nArtikel.");
        
        setArtikels(response.data.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoadingGetData(false);
      }
    };

    if (user.role !== "admin") {
      router.push("/");
      return;
    } else {
      getArtikelData();
    }
  }, []);

  const handleDeletedArtikel = (artikelId) => {
    const newArtikel = artikels.slice('').filter(item => item.artikelId !== artikelId);
    setArtikels(newArtikel);
  }

  return (
    <div className="text-dark bg-primary border-2 border-white">
      <AdminBreadcrumb title={"Artikel"} />
      <div className="px-8 flex flex-col gap-4">
        <div className="w-full flex justify-end items-center px-4">
          <Button>
            <Link href={"/admin/artikel/add"}>
              Tambah Artikel
            </Link>
          </Button>
        </div>
        <BlogSection href={"admin/artikel/add"} data={artikels} title={"List Artikel"} isGettingData={loadingGetData} type={"artikelPage"} onDeletedItem={handleDeletedArtikel} />
      </div>
    </div>
  );
};

export default AdminArtikel;
