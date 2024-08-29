"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { getUserByUsername } from "@/helpers/user";

function ProfileCard({ params }) {
  const router = useRouter();
  const username = params.username; 
  const [userData, setUserData] = useState(null);

   useEffect(() => {
    const getDataUser = async () => {
      try {
        const response = await getUserByUsername(username);
        console.log('Full API Response:', response); // Log the full response
        
        if (response && response.data) {
          console.log('Response Data:', response.data); // Log the data part of the response
          setUserData(response.data.data); // Adjust this path based on the actual response structure
        } else {
          console.error('No data found in API response');
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error.message);
      }
    };
    

    if (username) {
      getDataUser();
    }
  }, [username]);


  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-[var(--hero-bg-color)] py-16">
        <div className="w-full max-w-full mx-auto p-4 shadow-xl rounded-lg text-gray-900 bg-primary">
          <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
            {userData?.bgUrl ? (
              <Image
                src={userData.bgUrl}
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
            <div className="flex-shrink-0 mr-4 w-48 h-48 relative -mt-24 border-4 border-white rounded-full overflow-hidden">
              {userData?.profilePic ? (
                <Image
                  src={userData.profilePic}
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
              {userData.username && (
                <Button.secondary className={""}>
                  <Link href={`/admin/profile/${userData.username}/edit`}>Edit</Link>
                </Button.secondary>
              )}
            </div>
          </div>
          <div className="flex-grow">
            <div className="text-left">
              <p className="text-gray-500 ml-2">Username: @{userData.username}</p>
              <h2 className="font-medium text-2xl ml-2">Nama: {userData?.name}</h2>
            </div>
          </div>
          <div className="mt-4 ml-1">
            <p className="text-gray-700">
              <strong>Usia: {userData.age} tahun</strong>
            </p>
            <p className="text-gray-700">
              <strong>Jenis Kelamin: {userData.sex}</strong>
            </p>
            <p className="text-gray-700">
              <strong>Riwayat penyakit {userData.medHistory}</strong>{" "}
            </p>
          </div>
          <div className="p-4 border-t w-full flex-grow-0 mt-4">
            <p className="ml-5">{userData.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
