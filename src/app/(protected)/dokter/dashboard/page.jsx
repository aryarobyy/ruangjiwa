'use client';
const RevenueChart = dynamic(() => import("../../../../components/adminComponent/RevenueChart"), {
  ssr: false,
});
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import ProgressCard from "@/components/adminComponent/ProgressCard";
import RecentOrders from "@/components/adminComponent/RecentOrders";
import Sources from "@/components/adminComponent/Sources";
import ListOfDoctor from "@/components/adminComponent/ListOfDoctor";
import dynamic from "next/dynamic";
import BlogSection from "@/components/adminComponent/BlogSection";
import { useEffect, useState } from "react";
import { getAllArtikel } from "@/helpers/artikel";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

// coba pindain get data ke masing2 kompo, page ini jadiin use server

const DokterDashboard = () => {
  const [artikel, setArtikel] = useState([]);
  const [dokter, setDokter] = useState();
  const {user, logoutUser} = useAuth();
  const router = useRouter();
  const [loadingGetData, setLoadingGetData] = useState(false);
  
  useEffect(() => {
      if(user.role !== 'dokter') {
        router.push('/');
        return;
      } else {
        getAllData()
      };
  }, []);

  const getAllData = async () => {
    setLoadingGetData(true);
    try {
      const artikels = await getAllArtikel();
      setArtikel(artikels.data.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoadingGetData(false);
    }
  };
  
  const handleDeletedArtikel = (artikelId) => {
    const newArtikel = artikel.slice('').filter(item => item.artikelId !== artikelId);
    setArtikel(newArtikel); 
  }

  return (
    <div className="text-dark bg-primary border-2 border-white">
      <AdminBreadcrumb title="Dashboard" type={"Dokter"} />
      <section>
        <div className="px-8">
          <div className="my-6 space-y-6">
            {/* <Statistics /> */}

            <div className="grid gap-6 lg:grid-cols-2">
              <ProgressCard />
              <Sources />
            </div>

            <div className="w-full">
              <BlogSection title={"Artikel Anda"} data={artikel} type={'dashboard'} isGettingData={loadingGetData} onDeletedItem={handleDeletedArtikel} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DokterDashboard;
