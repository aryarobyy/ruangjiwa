"use client";
import ProgressCard from "@/components/adminComponent/ProgressCard";
import Sources from "@/components/adminComponent/Sources";
import ListOfDoctor from "@/components/adminComponent/ListOfDoctor";
import BlogSection from "@/components/adminComponent/BlogSection";
import { useEffect, useState } from "react";
import { getAllArtikel } from "@/helpers/artikel";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getAllDokter } from "@/helpers/dokter";
import { getAllActivitie } from "@/helpers/activities";
import { quotes } from "@/app/assets/data/quotesData";
import * as url from '@/helpers/endpointUrl'

// coba pindain get data ke masing2 kompo, page ini jadiin use server

const Dashboard = () => {
  const [artikel, setArtikel] = useState([null]);
  const [activities, setActivities] = useState(null);
  const [quote, setQuote] = useState("");
  const [pendingDokter, setPendingDokter] = useState(null);
  const [aprovedDokter, setAprovedDokter] = useState(null);
  const { user } = useAuth();
  const router = useRouter();
  const [loadingGetData, setLoadingGetData] = useState(false);

  useEffect(() => {
    if (user?.role !== "admin") {
      router.push("/");
      return;
    } else {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setQuote(randomQuote.quote);
      getAllData();
    }
  }, []);
  
  const getAllData = async () => {
    setLoadingGetData(true);
    try {
      const [artikels, activitieRes, doktors] = await Promise.all([
        getAllArtikel(),
        // getAllActivitie(),
        // getAllDokter(),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}${url.ENDPOINT_ACTIVITIE}`, { cache : "reload" })
        .then(res => res.json()),
        
        fetch(`${process.env.NEXT_PUBLIC_API_URL}${url.ENDPOINT_DOKTER}`, { cache : "reload"})
        .then(res => res.json())
      ]);
  
      if (artikels.data.message !== "Success")
        throw new Error("Sepertinya gagal memuat artikel!");
  
      if (activitieRes.message !== "Success")
        throw new Error("Sepertinya gagal memuat \nreport aktifitas dokter");

      console.log("dokter", doktors);
      console.log("artikel", artikels);
      console.log("activitie", activitieRes);
  
      setAprovedDokter(doktors.data.filter((el) => el.isApproved));
      setPendingDokter(doktors.data.filter((el) => !el.isApproved));
      setArtikel(artikels.data.data);
      setActivities(activitieRes.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoadingGetData(false);
    }
  };

  const handleDeletedArtikel = (artikelId) => {
    const newArtikel = artikel
      .slice("")
      .filter((item) => item.artikelId !== artikelId);
    setArtikel(newArtikel);
  };

  return (
    <div className="text-dark bg-primary border-2 border-white">
      <section>
        <div className="px-8">
          <div className="my-6 space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <ProgressCard quotes={quote} />
              <Sources data={activities} isGettingData={loadingGetData} />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ListOfDoctor
                  isGettingData={loadingGetData}
                  title={"Daftar Dokter Aktif"}
                  type={"active"}
                  data={aprovedDokter}
                />
              </div>
              <ListOfDoctor
                isGettingData={loadingGetData}
                title={"Daftar Dokter Pending"}
                type={"pending"}
                data={pendingDokter}
              />
            </div>
            <div className="w-full">
              <BlogSection
                href={"admin/artikel/add"}
                title={"List Artikel"}
                data={artikel}
                type={"dashboard"}
                isGettingData={loadingGetData}
                onDeletedItem={handleDeletedArtikel}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;