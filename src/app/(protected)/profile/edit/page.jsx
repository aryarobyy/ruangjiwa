"use client";

import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import React, { useState, useRef } from "react";
import useToast from "@/hooks/useHotToast";
import { updateUser } from "@/helpers/user";
import { postImage } from "@/helpers/image";
import { CiCamera } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { Label } from "@/components/ui/Label";

function EditProfile() {
  const refAddFile = useRef(null);
  const { updateToast, pushToast } = useToast();
  const [tempImg, setTempImg] = useState("");
  const [file, setFile] = useState(null);
  const router = useRouter();
  const { user, editUser } = useAuth();
  const [update, setUpdate] = useState({...user});

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const toastId = pushToast({
      isLoading: true,
      message: "Ditunggu ya...",
    });

    try {
      if (!user.profilePic && !file) {
        updateToast({
          toastId,
          message: "Mohon upload gambar!",
          isError: true
        });
        return;
      }

      const response = await editUser(file, update);
      if (response.data.message === "Success") {
        setUpdate({
          name: "",
          username: "",
          age: "",
          medHistory: "",
          profilePic: "",
          date: "",
        });
        updateToast({
          toastId,
          message: "Profile berhasil di perbarui",
        });
        router.push("/profile");
      } else {
        console.error("Update profile failed:", response.data.message);
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("Error when updating:", error.message);
      updateToast({
        toastId,
        message: error.message,
        isError: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-10 my-auto bg-[var(--hero-bg-color)]">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] bg-white md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center ">
            <div className="text-dark">
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2">
                Profil Kamu
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="relative w-[141px] h-[141px] rounded-full mx-auto bg-[var(--hero-bg-color)]">
                  {user?.profilePic ? (
                    <Image
                      src={tempImg ? tempImg : user?.profilePic}
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

                <h2 className="text-center mt-1 font-semibold">
                  Unggah foto profil
                </h2>

                <div className="flex text-dark lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <Label className="text-base">
                        Nama
                    </Label>
                    <Input
                      type="text"
                      value={update.name}
                      onChange={(e) =>
                        setUpdate({ ...update, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full">
                    <Label className="text-base">
                        Jenis Kelamin
                    </Label>
                    <select
                      className="w-full text-grey h-10 border-2 rounded-lg p-4 pl-2 pr-2 border-neutral-300 text-dark"
                      value={update.name}
                      onChange={(e) =>
                        setUpdate({ ...update, sex: e.target.value })
                      }
                    >
                    
                      <option disabled>
                        Pilih Jenis Kelamin
                      </option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <Label className="text-base">
                        Usia
                    </Label>
                    <Input
                      type="text"
                      inputMode="numeric"
                      value={update.age}
                      onChange={(e) =>
                        setUpdate({ ...update, age: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full mb-4 mt-6">
                    <Label className="text-base">
                        Riwayat Penyakit
                    </Label>
                    <Input
                      type="text"
                      value={update.medHistory}
                      onChange={(e) =>
                        setUpdate({ ...update, medHistory: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <Button onClick={handleSubmit}>
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

export default EditProfile;
