'use client';
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import ProgressCard from "@/components/adminComponent/ProgressCard";
import BlogSection from "@/components/adminComponent/BlogSection";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getArtikelByDokter } from "@/helpers/dokter";
import { getActivities } from "@/helpers/activities";
import LoadingSection from "@/components/system/LoadingSection";
import { quotes } from "@/app/assets/data/quotesData";


const DokterDashboard = () => {
  const [artikel, setArtikel] = useState([]);
  const [activities, setActivities] = useState();
  const [quote, setQuote] = useState('');
  const {user} = useAuth();
  const router = useRouter();
  const [loadingGetData, setLoadingGetData] = useState(false);
  
  useEffect(() => {
    
    const getAllData = async () => {
      setLoadingGetData(true);
      try {
        const artikels = await getArtikelByDokter(user.userId);
        if(artikels.data.message !== "Success") throw new Error(artikels.data.message);
        setArtikel(artikels.data.data);
        
        const activitiesRes = await getActivities(user.username);
        if(activitiesRes.data.message !== "Success") throw new Error(activitiesRes.data.message);
        console.log(activitiesRes.data);
        setActivities(activitiesRes.data.data);
        
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoadingGetData(false);
      }
    };

      if(user?.role !== 'dokter') {
        router.push('/');
        return;
      } else if(!user?.isApproved) {
        router.push('/');
        return;
      } else {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        setQuote(randomQuote.quote);
        getAllData()
      };
  }, []);
  
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

            <div className="grid gap-6 lg:grid-cols-2">
              <ProgressCard quotes={quote} />

              <div className="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50 text-dark">
                <div className="flex items-center w-full font-semibold border-b border-default-200 px-4 py-3 justify-center">
                  <h4 className="text-lg text-default-900 text-center">Report Aktivitas Anda</h4>
                </div>
                <div>
                  {
                    loadingGetData && !activities ? (
                      <div className="w-full h-[90px] flex justify-center items-center">
                        <LoadingSection />
                    </div>
                    ) : (
                      <table className="w-full">
                      <thead className="border-b border-default-200 bg-default-100">
                        <tr>
                          <th className="p-2 text-center text-sm font-semibold text-default-900">
                            Total Artikel
                          </th>
                          <th className="p-2 text-center text-sm font-semibold text-default-900">
                            Total Konsultasi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y dark:divide-default-200 text-center">
                            <tr >
                              <td className="p-2">{activities?.sumArtikel}</td>
                              <td className="p-2">{activities?.sumKonsul}</td>
                            </tr>
                      </tbody>
                    </table>
                    )
                  }
                </div>
              </div>
            </div>

            <div className="w-full">
              <BlogSection
                title={"Artikel Anda"}
                data={artikel}
                type={"dashboard"}
                isGettingData={loadingGetData}
                onDeletedItem={handleDeletedArtikel}
                href={"/dokter/artikel/add"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DokterDashboard;
