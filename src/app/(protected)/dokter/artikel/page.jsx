"use client";
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import BlogSection from "@/components/adminComponent/BlogSection";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/context/AuthContext";
import { getAllArtikel } from "@/helpers/artikel";
import { getArtikelByDokter } from "@/helpers/dokter";
import Link from "next/link";
import { useEffect, useState } from "react";

const AdminArtikel = () => {
  const [ artikels, setArtikels ] = useState([]);
  const [loadingGetData, setLoadingGetData] = useState(false);
  const {user} = useAuth();

  useEffect(() => {
      getArtikelData();
  }, []);
  
  const getArtikelData = async () => {
    setLoadingGetData(true);
    try {
      const response = await getArtikelByDokter(user.dokterId);
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
        <BlogSection data={artikels} title={"List Artikel Anda"} isGettingData={loadingGetData} type={"artikelPage"} onDeletedItem={handleDeletedArtikel} />
      </div>
    </div>
  );
};

export default AdminArtikel;
