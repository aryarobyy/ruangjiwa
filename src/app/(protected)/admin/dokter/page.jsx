'use client';
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import ListOfDoctor from "@/components/adminComponent/ListOfDoctor";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
// import tempDataDokter from '@/assets/data'
import { dokters } from "@/components/adminComponent/data";
import Sources from "@/components/adminComponent/Sources";

const DokterPage = () => {
  const [dokter, setDokter] = useState([]);
  const [pendingDokter, setPendingDokter] = useState();
  const [aprovedDokter, setAprovedDokter] = useState();
  const {user} = useAuth();
  const router = useRouter();
  const [loadingGetData, setLoadingGetData] = useState(false);

  
  useEffect(() => {
      if(user.role !== 'admin') {
        router.push('/');
        return;
      } else {
        getDokterData()
      };
  }, []);

  const getDokterData = async () => {
    setAprovedDokter(dokters.filter((el) => el.isAproved));
    setPendingDokter(dokters.filter((el) => !el.isAproved));
  };
  
  const handleDeletedArtikel = (artikelId) => {
    
  }

  return (
    <div className="text-dark bg-primary border-2 border-white">
      <AdminBreadcrumb title="Daftar Dokter" />
      <section>
        <div className="px-8">
          <div className="my-6 space-y-6">
            <div className="w-full">
              <Sources />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <ListOfDoctor title={"Daftar Dokter Aktif"} type={"active"} data={aprovedDokter} />
              <ListOfDoctor title={"Daftar Regist Dokter"} type={"regist"} data={pendingDokter} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DokterPage;
