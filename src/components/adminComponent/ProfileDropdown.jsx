'use client';
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import { useAuth } from '@/context/AuthContext'
import useToast from '@/hooks/useHotToast';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { LuBookOpen, LuLogOut, LuNewspaper, LuRadar, LuSettings, LuUser } from 'react-icons/lu'

const ProfileDropdown = () => {
  const {user, logoutUser} = useAuth();
  const [isDropDownShow, setIsDropDownShow] = useState(false);
  const {pushToast, updateToast} = useToast();

  const handleLogout = async () => {
    const toastId = pushToast({
      message: "Ditunggu ya!",
      isLoading: true,
    })
    try {
      await logoutUser();
      updateToast({
        toastId,
        message: "Berhasil logout!"
      })
    } catch (error) {
      updateToast({
        toastId,
        message: "Ops! Sepertinya gagal!",
        isError: true
      })
      
    }
  }

  return (
    <div className="relative inline-flex" onClick={() => setIsDropDownShow(!isDropDownShow)}>
      <button
        type="button"
        className="inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all"
      >
        <Image
          alt="avatar"
          className="inline-block w-11 size-9 rounded-full"
          src={avatar1}
        />
        <div className="text-start text-dark">
          <p className="text-sm font-bold">{user?.name}</p>
          <p className="mt-1 text-xs font-semibold ">{user?.role}</p>
        </div>
      </button>
      <div className={`${isDropDownShow ? '' : 'hidden'} right-0 top-10 duration mt-2 min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 absolute shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50`}>
        <Link
          className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
          href="#"
        >
          <LuUser className="size-4" />
          Profil Anda
        </Link>
        <Link
          className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
          href="/"
          target="_blank"
        >
          <LuRadar className="size-4" />
          Dashboard
        </Link>
        <Link
          className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
          href="/dokter/artikel"
        >
        <LuBookOpen className="size-4" />
          Artikel Anda
        </Link>
        <hr className="-mx-2 my-2 border-default-200" />
        <button className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-500/10" onClick={handleLogout}>
          <LuLogOut className="size-4"/>
          Log out
        </button>
      </div>
    </div>
  )
}

export default ProfileDropdown
