'use client';
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import ListOfDoctor from "@/components/adminComponent/ListOfDoctor";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
// import tempDataDokter from '@/assets/data'
import { dokters } from "@/components/adminComponent/data";
import Sources from "@/components/adminComponent/Sources";
import { getAllDokter } from "@/helpers/dokter";
import useToast from "@/hooks/useHotToast";

const DokterPage = () => {
  const [pendingDokter, setPendingDokter] = useState();
  const [aprovedDokter, setAprovedDokter] = useState();
  const {user} = useAuth();
  const router = useRouter();
  const [loadingGetData, setLoadingGetData] = useState(false);
  const {pushToast} = useToast();

  
  useEffect(() => {
      if(user.role !== 'admin') {
        router.push('/');
        return;
      } else {
        getDokterData()
      };
  }, []);

  const getDokterData = async () => {
    setLoadingGetData(true);
    try {
      const doktors = await getAllDokter();
      setAprovedDokter(doktors.data.data.filter(el => el.isApproved));
      setPendingDokter(doktors.data.data.filter(el => !el.isApproved));
    } catch (error) {
      console.error(error.message);
      pushToast({
        message: error.message,
        isError: true
      });
    } finally {
      setLoadingGetData(false);
    };
  };
  

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
                <ListOfDoctor title={"Daftar Dokter Aktif"} type={"active"} data={aprovedDokter} isGettingData={loadingGetData} />
              <ListOfDoctor title={"Daftar Regist Dokter"} type={"regist"} data={pendingDokter} isGettingData={loadingGetData} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DokterPage;
