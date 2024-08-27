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


                <div className="rounded-t-lg h-40 overflow-hidden bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')]"></div>
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
                {/* <div className="ml-auto mr-2"> //identify usernya dulu baru ditampilin
                    <Button.secondary className={''}>
                        <Link href="admin/dokter/edit">
                            Edit
                        </Link>
                    </Button.secondary>
                </div> */}
                </div>
                <div className="flex-grow">
                    <div className="text-left">
                        <p className="text-gray-500 ml-2">Username: @{user?.username} </p>
                        <h2 className="font-medium text-2xl ml-2">Nama: {user?.name}</h2>
                        {/* <h3 className="font-medium text-2xl ml-2">Spesialis: </h3> */}
                        
                    </div>
                </div>
                <div className="text-center mt-4 ml-auto">
                    <p className="text-gray-700">
                    <strong>{`Jumlah Artikel:  artikel`}</strong></p>
                {/* <p className="text-gray-700">
                    <strong>{`Usia:  tahun`}</strong>
                </p>
                <p className="text-gray-700">
                    <strong>Jenis Kelamin: </strong>{" "}
                </p> */}
                </div>
                <div className="p-4 border-t w-full flex-grow-0 mt-4">
                    <h1 className="ml-3">
                        Judul
                    </h1>
                    <p className="ml-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae laudantium consequatur rem labore nobis velit modi mollitia perspiciatis! Vel natus eaque quis amet obcaecati eum sapiente exercitationem odio ipsam!
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}

export default ProfileCard;
