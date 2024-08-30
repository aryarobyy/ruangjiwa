"use client";
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import ListOfDoctor from "@/components/adminComponent/ListOfDoctor";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Sources from "@/components/adminComponent/Sources";
import { getAllDokter } from "@/helpers/dokter";
import useToast from "@/hooks/useHotToast";
import { getAllActivitie } from "@/helpers/activities";

const DokterPage = () => {
  const [pendingDokter, setPendingDokter] = useState();
  const [aprovedDokter, setAprovedDokter] = useState();
  const [activities, setActivities] = useState();
  const { user } = useAuth();
  const router = useRouter();
  const [loadingGetData, setLoadingGetData] = useState(false);
  const { pushToast } = useToast();

  useEffect(() => {
    const getDokterData = async () => {
      setLoadingGetData(true);
      try {
        const doktors = await getAllDokter();
        if (doktors.data.message !== "Success")
          throw new Error("Sepertinya gagal memuat \nreport aktifitas dokter");
        setAprovedDokter(doktors.data.data.filter((el) => el.isApproved));
        setPendingDokter(doktors.data.data.filter((el) => !el.isApproved));

        const activitieRes = await getAllActivitie();
        if (activitieRes.data.message !== "Success")
          throw new Error("Sepertinya gagal memuat \nreport aktifitas dokter");
        setActivities(activitieRes.data.data);
      } catch (error) {
        console.error(error.message);
        pushToast({
          message: error.message,
          isError: true,
        });
      } finally {
        setLoadingGetData(false);
      }
    };
    
    if (user.role !== "admin") {
      router.push("/");
      return;
    } else {
      getDokterData();
    }
  }, []);

  return (
    <div className="text-dark bg-primary border-2 border-white">
      <AdminBreadcrumb title="Daftar Dokter" />
      <section>
        <div className="px-8">
          <div className="my-6 space-y-6">
            <div className="w-full">
              <Sources data={activities} isGettingData={loadingGetData} />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <ListOfDoctor
                title={"Daftar Dokter Aktif"}
                type={"active"}
                data={aprovedDokter}
                isGettingData={loadingGetData}
              />
              <ListOfDoctor
                title={"Daftar Regist Dokter"}
                type={"regist"}
                data={pendingDokter}
                isGettingData={loadingGetData}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DokterPage;
