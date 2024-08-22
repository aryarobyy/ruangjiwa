"use client";
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import LoadingSection from "@/components/system/LoadingSection";
import { getArtikelById } from "@/helpers/artikel";
import useToast from "@/hooks/useHotToast";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = {
  _id: "66c4291d22705d84426c7e84",
  title: "Judul Artikel ke 1",
  description:
    "                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam, illo alias ipsum qui dolorum optio reiciendis omnis! Optio quod fugit quam impedit vero labore accusamus? Tenetur ab iste quo?\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iure distinctio enim, obcaecati dicta doloribus numquam vel vitae ducimus mollitia illum nemo rem quos? Quis, deleniti? Voluptatem ducimus vel illo.\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad eius quidem fugit sequi fugiat obcaecati harum temporibus, totam in aperiam omnis aut cumque facere! Dolore earum expedita ducimus labore?",
  imgUrl:
    "https://res.cloudinary.com/dcpxbtbaz/image/upload/v1724131611/pw7optfhahfpakuy5phl.png",
  creatorId: "7be0906f-9fdf-4aac-9b51-baad17a0c1b8",
  name: "Irzi",
  date: "2024-08-20T05:26:38.127Z",
  artikelId: "6c46c36e-a648-49f3-b713-f3c59465960c",
};

const AdminArtikelDetail = ({ params }) => {
  const [artikel, setArtikel] = useState();
  const [loading, setLoading] = useState(false);
  const { pushToast } = useToast();
  const id = params.id;

  const getData = async () => {
    setLoading(true);
    try {
      const {data} = await getArtikelById(id);
      setArtikel(data.data);
    } catch (error) {
      console.error(error.message);
      pushToast({
        message: "Gagal mendapatkan artikel",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="text-dark bg-primary border-2 border-white">
      <AdminBreadcrumb title={"Artikel Detail"} />
      <div onClick={() => console.log(artikel)} className="px-8 py-2 h-fit overflow-auto">
        <div className="rounded-md min-h-[400px] border border-default-200 bg-white overflow-auto dark:bg-default-50 w-full text-dark py-4 h-full">
          {loading ? (
            <div className="w-full h-[400px] flex items-center justify-center">
              <LoadingSection />
            </div>
          ) : (
            <>
              <div className="border-b border-default-200 px-6 py-3 text-center">
                <h2
                  onClick={() => console.log(artikel)}
                  className="text-lg text-dark"
                >
                  {artikel?.title}
                </h2>
              </div>
              <div className="h-full py-6 px-8 text-justify ">
                <div className="w-full sm:w-2/5 mx-4 m-2 rounded-md sm:float-right overflow-hidden h-fit">
                  {
                    artikel && <Image
                    className="hover:scale-105 transition-all ease-in-out duration-300 rounded-md object-cover w-full h-[40dvh]"
                    src={artikel?.imgUrl}
                    width={500}
                    height={750}
                    alt={artikel?.title}
                  />
                  }
                </div>
                <div className="w-full">
                  <p>{artikel?.description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminArtikelDetail;
