"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteDokter, getAllDokter, getArtikelByDokter, getDokterByUsername, updateApprovedDokter } from "@/helpers/dokter";
import LoadingSection from "@/components/system/LoadingSection";
import useToast from "@/hooks/useHotToast";
import { useRouter } from "next/navigation";
import BlogSection from "@/components/adminComponent/BlogSection";
import BlogCard from "@/components/adminComponent/BlogCard";

const DokterDetail = ({ params }) => {
  const [dataDokter, setDataDokter] = useState();
  const [artikelDokter, setArtikelDokter] = useState();
  const [loadingGetData, setLoadingGetData] = useState(false);
  const [changedData, setChangedData] = useState(false);
  const username = params.username;
  const {pushToast, updateToast} = useToast();
  const router = useRouter();

  useEffect(() => {
    const getDataDokter = async () => {
      setLoadingGetData(true);
      try {
        const dataDokter = await getDokterByUsername(username);
        setDataDokter(dataDokter.data.data);
        const artikels = await getArtikelByDokter(dataDokter.data.data.userId);
        setArtikelDokter(artikels.data.data);

      } catch (error) {
        console.error(error.message);
        // toast
      } finally {
        setLoadingGetData(false);
      }
    };
    getDataDokter();
  }, [changedData]);

  const handleAccept = async () => {
    const toastId = pushToast({
      message: "Loading...",
      isLoading: true
    });
    try {
      await updateApprovedDokter(username)
      
      updateToast({
        toastId,
        message: "Success!"
      })
      setChangedData(!changedData);
    } catch (error) {
      // toast
      console.error(error.message)
      updateToast({
        toastId,
        message: "Failed!"
      })
    }
  };

  const handleReject = async () => {
    try {
      await deleteDokter(username);

      updateToast({
        toastId,
        message: "Success!"
      })
      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error.message)
      updateToast({
        toastId,
        message: "Failed!"
      })
    }
  }

  return (
    <>
      <div className="w-full h-full bg-[var(--hero-bg-color)]">
        <div className="w-full max-w-full mx-auto shadow-xl rounded-lg text-gray-900 bg-primary">
          {loadingGetData ? (
            <>
              <div className="w-full h-screen flex items-center justify-center">
                <LoadingSection />
              </div>
            </>
          ) : (
            <div>
              <div className="rounded-t-lg h-40 overflow-hidden bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')]"></div>
              <div className="flex items-center p-4">
                <div className="flex-shrink-0 mr-4 w-48 h-48 relative -mt-24 border-4 border-white rounded-full overflow-hidden ">
                  {dataDokter?.profilePic ? (
                    <Image
                      // src={user?.profilePic}
                      alt="Profile Image"
                      width={100}
                      height={100}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <Image
                      src="/avatar.jpg"
                      alt="Default Avatar"
                      width={100}
                      height={100}
                      className="w-full h-full rounded-full object-cover"
                    />
                  )}
                </div>
                <div className="ml-auto mr-2 hidden">
                  <Button.secondary className={""}>
                    <Link href="admin/dokter/edit">Edit</Link>
                  </Button.secondary>
                </div>
              </div>
              <div className="flex-grow p-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="w-full">
                    <p className="text-gray-500 ml-2">{`Username: @${dataDokter?.username} `}</p>
                    <h2 className="font-medium text-xl ml-2">{`Nama: ${dataDokter?.name}`}</h2>
                    <h3 className="font-medium text-xl ml-2">{`Spesialis: ${
                      dataDokter?.spesialis ? dataDokter.spesialis : "-"
                    }`}</h3>
                  </div>
                  <div
                    className={`w-full flex items-center sm:items-end justify-center sm:justify-end gap-4 ${
                      dataDokter?.isApproved && "hidden"
                    }`}
                  >
                    <Button onClick={handleAccept}>Terima</Button>
                    <Button.danger onClick={handleReject}>Tolak</Button.danger>
                  </div>
                </div>
                <div className={`w-full text-center py-4 flex flex-col justify-center items-center`}>
                  <p>Bio</p>
                  <p className="sm:w-2/3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla labore cumque eaque laudantium illo illum ea
                    voluptatibus et quidem quos quas optio soluta, alias
                    voluptates tempora numquam iusto consectetur quam! Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur veritatis, officiis veniam quidem aperiam sed
                    iure nam, ipsum fugit tenetur deserunt omnis sunt accusamus
                    doloribus hic quos ratione. Odio, enim.
                  </p>
                </div>
              </div>

              {dataDokter?.isApproved ? (
                <div className={`w-full`}>
                  <div
                    className={`p-4 border-t w-full flex-grow-0 mt-4 grid sm:grid-cols-2 gap-4`}
                  >
                    {/* artikel */}
                    <div className="rounded-md border border-default-200 bg-white dark:bg-default-50 w-full text-dark">
                      <div className="border-b border-default-200 px-6 py-3 text-center">
                        <h4 className="text-lg text-dark">{`List Artikel Dokter ${dataDokter.name}`}</h4>
                      </div>
                      <div
                        className={`h-[500px] scroll-smooth p-2 overflow-y-auto  ${
                          !artikelDokter || artikelDokter?.length < 1
                            ? ""
                            : "grid sm:grid-cols-2 md:grid-cols-3 gap-2"
                        }`}
                      >
                        {loadingGetData ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <LoadingSection />
                          </div>
                        ) : !artikelDokter || artikelDokter?.length < 1 ? (
                          <div className="w-full h-full flex flex-col gap-3 justify-center items-center text-center">
                            <h1>Sepertinya belum terdapat artikel</h1>
                          </div>
                        ) : (
                          artikelDokter?.map((item, idx) => {
                            return (
                              <BlogCard
                                key={idx}
                                data={item}
                                handleDeletedItem={onDeletedItem}
                                itemDescription={`${item.description.slice(0, 200)}...`}
                              />
                            );
                          })
                        )}
                      </div>
                    </div>

                    {/* konsul */}
                    <div className="rounded-md border border-default-200 bg-white dark:bg-default-50 w-full text-dark">
                      <div className="border-b border-default-200 px-6 py-3 text-center">
                        <h4 className="text-lg text-dark">{`List Konsul Dokter ${dataDokter.name}`}</h4>
                      </div>
                      <div
                        className={`h-[500px] scroll-smooth p-2 overflow-y-auto  ${
                          !artikelDokter || artikelDokter?.length < 1
                            ? ""
                            : "grid sm:grid-cols-2 md:grid-cols-3 gap-2"
                        }`}
                      >
                        {loadingGetData ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <LoadingSection />
                          </div>
                        ) : !artikelDokter || artikelDokter?.length < 1 ? (
                          <div className="w-full h-full flex flex-col gap-3 justify-center items-center text-center">
                            <h1>Sepertinya belum terdapat artikel</h1>
                          </div>
                        ) : (
                          artikelDokter?.map((item, idx) => {
                            return (
                              <BlogCard
                                key={idx}
                                data={item}
                                handleDeletedItem={onDeletedItem}
                                itemDescription={`${item.description.slice(0, 200)}...`}
                              />
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 w-full">
                  <div className="p-2 flex w-full gap-2 justify-center items-center">
                    <Button>
                      <Link href={dataDokter ? dataDokter.cv : "#"}>
                        Download CV
                      </Link>
                    </Button>
                    <Button.secondary>
                      <Link
                        href={`${dataDokter ? dataDokter.ijazah : "#"}`}
                        target="_blank"
                      >
                        Download Ijazah
                      </Link>
                    </Button.secondary>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DokterDetail;
