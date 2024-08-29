"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Button from "@/components/ui/Button";

function ProfileCard() {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-[var(--hero-bg-color)] py-16">
            <div className="w-full max-w-full mx-auto p-4 shadow-xl rounded-lg text-gray-900 bg-primary">
            <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
  {user?.bgUrl ? (
    <Image
      src={user.bgUrl}
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
                {user?.profilePic ? (
                    <Image
                    src={user?.profilePic}
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
                        <Link href={`${user.username}/edit`}>
                            Edit
                        </Link>
                    </Button.secondary>
                </div>
                </div>
                <div className="flex-grow">
                    <div className="text-left">
                        <p className="text-gray-500 ml-2">Username: @{user?.username} </p>
                        <h2 className="font-medium text-2xl ml-2">Nama: {user?.name}</h2>
                        
                    </div>
                </div>
                <div className=" mt-4 ml-1">
                <p className="text-gray-700">
                  <strong>Usia: {user.age} tahun</strong>
                </p>
                <p className="text-gray-700">
                    <strong>Jenis Kelamin: {user.sex} </strong>
                </p>
                <p className="text-gray-700">
                    <strong>Riwayat penyakit {user.medHistory} </strong>{" "}
                </p>
                </div>
                <div className="p-4 border-t w-full flex-grow-0 mt-4">
                    <p className="ml-5">
                        {user.bio}
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}

export default ProfileCard;
