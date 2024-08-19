"use client"
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { RxAvatar } from "react-icons/rx";

function ProfileCard() {
  const {user} = useAuth()
  console.log(user)
    return (
        <div className="max-w-4xl mx-4 sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-lg sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-48 overflow-hidden bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')]">
            </div>
            <div className="mx-auto w-48 h-48 relative -mt-24 border-4 border-white rounded-full overflow-hidden ">
                {!user?.imgUrl && <RxAvatar className="absolute top-0 left-0 w-full h-full object-cover" /> }
            </div>
            <div className="text-center mt-4">
                <p className="text-gray-500">username: @{user?.username} </p>
                <h2 className="font-semibold text-2xl">Nama: {user?.name}</h2>
            </div>
            <div className="text-center mt-4">
                <p className="text-gray-700"><strong>Usia: {user?.age}</strong>tahun</p>
                <p className="text-gray-700"><strong>Riwayat Penyakit: {user?.medHistory}</strong> </p>
                <p className="text-gray-700"><strong>{user?.role}</strong></p>
            </div>
            {/* <ul className="py-6 mt-4 text-gray-700 flex items-center justify-around">
                <li className="flex flex-col items-center justify-around">
                    <svg className="w-6 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                    </svg>
                </li>
                <li className="flex flex-col items-center justify-between">
                    <svg className="w-6 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"
                        />
                    </svg>
                </li>
                <li className="flex flex-col items-center justify-around">
                    <svg className="w-6 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
                        />
                    </svg>
                </li>
            </ul> */}
            <div className="p-4 border-t mx-8 mt-4">
                <Link href='/profile/edit' className=" flex-center w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                    Edit
                </Link>
            </div>
        </div>
    );
}

export default ProfileCard;
