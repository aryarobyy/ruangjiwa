// const handleEditDokter = async () => {
//     const tempData = {...dataDokter};
//     try{
//         let imagePath;
//         let newData = {
//             username: tempData.username,
//             name: tempData.name,
//             profilePic: tempData.profilePic,
//             spesialis: tempData.spesialis,
//             age: tempData.age
//         };

//         if(!tempData.profilePic) {
//             imagePath = await postFile(file);
//             newData = {...newData, profilePic: imagePath.data.data};
//         }

//         const response = await updateDokter(newData);
        
//         const fixData = {...tempData, ...newData};
//         localStorage.setItem("userData", JSON.stringify(fixData))
//         setUser(fixData);
//         return response
//     } catch (error){
//         console.error("Something error", error.message)
//         throw error
//     }
// }

"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { getDokterByUsername } from "@/helpers/dokter";

function ProfileCard() {
  const [dataDokter, setDataDokter] = useState();
  const [changedData, setChangedData] = useState(false);
  const [loadingGetData, setLoadingGetData] = useState(false);
  const username = params.username;

    useEffect(() => {
        const getDataDokter = async () => {
          setLoadingGetData(true);
          try {
            const dataDokter = await getDokterByUsername(username);
            setDataDokter(dataDokter.data.data);
            // const artikels = await getArtikelByDokter(dataDokter.data.data.userId);
            // setArtikelDokter(artikels.data.data);
    
          } catch (error) {
            console.error(error.message);
            // toast
          } finally {
            setLoadingGetData(false);
          }
        };
        getDataDokter();
      }, [changedData]);
  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-[var(--hero-bg-color)] py-16">
            <div className="w-full max-w-full mx-auto p-4 shadow-xl rounded-lg text-gray-900 bg-primary">
            <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
  {dataDokter?.bgUrl ? (
    <Image
      src={dataDokter.bgUrl}
      alt="background"
      layout="fill"
      objectFit="cover"
      className="w-full h-full"
    />
  ) : (
    <Image
      src="/background.jpg"
      layout="fill"
      objectFit="cover"
      className="w-full h-full"
    />
  )}
</div>
                <div className="flex items-center">
                <div className="flex-shrink-0 mr-4 w-48 h-48 relative -mt-24 border-4 border-white rounded-full overflow-hidden ">
                {dataDokter?.profilePic ? (
                    <Image
                    src={dataDokter?.profilePic}
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
                <div className="ml-auto mr-2"> 
                    <Button.secondary className={''}>
                        <Link href={`${dataDokter.username}/edit`}>
                            Edit
                        </Link>
                    </Button.secondary>
                </div>
                </div>
                <div className="flex-grow">
                    <div className="text-left">
                        <p className="text-gray-500 ml-2">Username: @{dataDokter?.username} </p>
                        <h2 className="font-medium text-2xl ml-2">Nama: {dataDokter?.name}</h2>
                        
                    </div>
                </div>
                <div className=" mt-4 ml-1">
                <p className="text-gray-700">
                  <strong>Usia: {dataDokter.age} tahun</strong>
                </p>
                <p className="text-gray-700">
                    <strong>Jenis Kelamin: {dataDokter.sex} </strong>
                </p>
                <p className="text-gray-700">
                    <strong>Riwayat penyakit {dataDokter.spesialis} </strong>{" "}
                </p>
                </div>
                <div className="p-4 border-t w-full flex-grow-0 mt-4">
                    <p className="ml-5">
                        {dataDokter.bio}
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}

export default ProfileCard;
