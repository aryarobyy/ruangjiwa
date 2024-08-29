'use client'
import { ReactNode, Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import useToast from '@/hooks/useHotToast'
const TopBar = dynamic(() => import('@/components/adminComponent/TopBar'))

const loading = () => <div />

const DokterLayout = ({ children }) => {
  const {user} = useAuth();
  const router = useRouter();
  const {pushToast} = useToast();

  useEffect(() => {
    if(user?.role !== 'dokter') {
      pushToast({
        message: "Anda tidak punya hak untuk mengakses ini",
        isError: true
      });
      router.push('/');
      return;
    } else if(!user?.isApproved) {
      pushToast({
        message: "Maaf, anda belum dapat mengakses ini. \nHubungi administrator dan coba lagi nanti.",
        isError: true
      })
      router.push('/');
      return;
    }; 

    document.body.classList.add('bg-default-50')
    return () => {
      document.body.classList.remove('bg-default-50')
    }

  }, [])

  return (
    <>
      <Suspense fallback={loading()}>
        <TopBar type="dokter" />
      </Suspense>

      <Suspense fallback={loading()}>{children}</Suspense>
    </>
  )
}

export default DokterLayout
