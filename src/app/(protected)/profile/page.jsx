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
            <div className="max-w-4xl mx-4 sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-lg sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto shadow-xl rounded-lg text-gray-900  bg-primary">
                <div className="rounded-t-lg h-48 overflow-hidden bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')]"></div>
                <div className="mx-auto w-48 h-48 relative -mt-24 border-4 border-white rounded-full overflow-hidden ">
                {user?.profilePic ? (
                    <Image
                    src={user?.profilePic}
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
                </div>
                <div className="text-center mt-4">
                <p className="text-gray-500">Username: @{user?.username} </p>
                <h2 className="font-semibold text-2xl">Nama: {user?.name}</h2>
                </div>
                <div className="text-center mt-4">
                <p className="text-gray-700">
                    <strong>{`Usia: ${user?.age} tahun`}</strong>
                </p>
                <p className="text-gray-700">
                    <strong>Jenis Kelamin: {user?.sex}</strong>{" "}
                </p>
                </div>
                <div className="p-4 border-t w-full flex items-center justify-center mt-4">
                    <Button.secondary className={''}>
                    <Link href="/profile/edit">
                        Edit
                    </Link>
                    </Button.secondary>
                </div>
            </div>
        </div>
    </>
  );
}

export default ProfileCard;
