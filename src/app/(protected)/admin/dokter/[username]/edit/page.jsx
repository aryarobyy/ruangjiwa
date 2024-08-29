"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CiCamera } from "react-icons/ci";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import useToast from "@/hooks/useHotToast";
import { postFile } from "@/helpers/image";
import { updateDokter, getDokterByUsername } from "@/helpers/dokter"; // Import getDokterByUsername

function Page({ params }) {
  const refAddFile = useRef(null);
  const { updateToast, pushToast } = useToast();
  const router = useRouter();
  const [tempImg, setTempImg] = useState("");
  const [file, setFile] = useState(null);
  const [dataDokter, setDataDokter] = useState(null);
  const [update, setUpdate] = useState({});
  const [changedData, setChangedData] = useState(false);
  const [loadingGetData, setLoadingGetData] = useState(false);
  const username = params.username;

  useEffect(() => {
    const getDataDokter = async () => {
      setLoadingGetData(true);
      try {
        const response = await getDokterByUsername(username);
        const dokterData = response.data.data;
        setDataDokter(dokterData);
        setUpdate(dokterData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoadingGetData(false);
      }
    };
    getDataDokter();
  }, [username, changedData]); // Add username as dependency

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      alert("Tolong pilih File");
      return;
    }
    setFile(selectedFile);
    const tempFile = URL.createObjectURL(selectedFile);
    setTempImg(tempFile);
  };

  const handleEditDokter = async () => {
    const tempData = { ...update }; // Use the `update` state here
    try {
      let imagePath;
      let newData = {
        username: tempData.username,
        name: tempData.name,
        profilePic: tempData.profilePic,
        spesialis: tempData.spesialis,
        age: tempData.age,
        bio: tempData.bio,
      };

      if (!tempData.profilePic && file) {
        imagePath = await postFile(file);
        newData = { ...newData, profilePic: imagePath.data.data };
      }

      const response = await updateDokter(newData);

      const fixData = { ...tempData, ...newData };
      localStorage.setItem("userData", JSON.stringify(fixData));
      setDataDokter(fixData); // Update local state with new data
      setChangedData(!changedData); // Trigger data refresh
      return response;
    } catch (error) {
      console.error("Something went wrong", error.message);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = pushToast({
      isLoading: true,
      message: "Ditunggu ya...",
    });

    try {
      if (!update.profilePic && !file) {
        updateToast({
          toastId,
          message: "Mohon upload gambar!",
          isError: true,
        });
        return;
      }

      await handleEditDokter();

      updateToast({
        toastId,
        message: "Profile berhasil di perbarui",
      });
      router.push(`/profile/${dataDokter.username}`);
    } catch (error) {
      console.error("Error when updating:", error.message);
      updateToast({
        toastId,
        message: error.message,
        isError: true,
      });
    }
  };

  if (loadingGetData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <section className="py-10 my-auto bg-[var(--hero-bg-color)]">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] bg-white md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center">
            <div className="text-dark">
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2">
                Profil Kamu
              </h1>

              {/* Background for Avatar */}
              <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                <Image
                  src="/background.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />

                {/* Avatar Section */}
                <div className="relative w-[141px] h-[141px] rounded-full mx-auto bg-[var(--hero-bg-color)] ">
                  {dataDokter?.profilePic ? (
                    <Image
                      src={tempImg ? tempImg : dataDokter.profilePic}
                      alt="Profile Image"
                      width={141}
                      height={141}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <Image
                      src="/avatar.jpg"
                      alt="Default Avatar"
                      width={141}
                      height={141}
                      className="w-full h-full rounded-full object-cover"
                    />
                  )}

                  <div className="absolute top-0 right-0 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                    <CiCamera
                      className="w-5 h-5 text-blue-700"
                      onClick={() => refAddFile.current.click()}
                    />
                  </div>

                  <input
                    type="file"
                    ref={refAddFile}
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <h2 className="text-center mt-1 font-semibold">Unggah foto profil</h2>

              {/* Form Section */}
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="flex text-dark lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <Label className="text-base">Nama</Label>
                    <Input
                      type="text"
                      value={update.name}
                      onChange={(e) => setUpdate({ ...update, name: e.target.value })}
                    />
                  </div>
                  <div className="w-full mb-4 mt-6">
                    <Label className="text-base">Jenis Kelamin</Label>
                    <select
                      className="w-full text-dark h-10 border-2 rounded-lg pl-2 pr-2 border-neutral-300"
                      value={update.sex || ""}
                      onChange={(e) => setUpdate({ ...update, sex: e.target.value })}
                    >
                      <option value="" disabled>
                        Pilih Jenis Kelamin
                      </option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>

                {/* Other Inputs */}
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <Label className="text-base">Usia</Label>
                    <Input
                      type="text"
                      inputMode="numeric"
                      value={update.age}
                      onChange={(e) => setUpdate({ ...update, age: e.target.value })}
                    />
                  </div>

                  <div className="w-full mb-4 mt-6">
                    <Label className="text-base">Spesialis</Label>
                    <Input
                      type="text"
                      value={update.spesialis}
                      onChange={(e) => setUpdate({ ...update, spesialis: e.target.value })}
                    />
                  </div>
                </div>

                {/* Additional Form Inputs */}
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <Label className="text-base">Bio</Label>
                    <textarea
                      className="h-24 w-full border-2 rounded-lg p-2 border-neutral-300 text-dark"
                      value={update.bio}
                      onChange={(e) => setUpdate({ ...update, bio: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button type="submit" className="bg-blue-500 w-2/3 mx-auto mt-8 text-white">
                    Simpan Perubahan
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
