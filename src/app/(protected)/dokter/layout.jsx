'use client'
import { ReactNode, Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
// import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import useToast from '@/hooks/useHotToast'
// import NextTopLoader from 'nextjs-toploader'
const TopBar = dynamic(() => import('@/components/adminComponent/TopBar'))

const loading = () => <div />

const DokterLayout = ({ children }) => {
//   const router = useRouter()
//   const { status } = useSession()
  const {user} = useAuth();
  const router = useRouter();
  const {pushToast} = useToast();

  useEffect(() => {
    if(user.role !== 'dokter') {
      pushToast({
        message: "Anda tidak punya hak untuk mengakses ini",
        isError: true
      });
      router.push('/');
      return;
    };
    if(user?.role === 'dokter' && user?.isApproved === false) {
      pushToast({
        message: "Maaf, anda belum dapat mengakses ini. \nHubungi administrator dan coba lagi nanti.",
        isError: true
      })
      router.push('/');
      return;
    }

    document.body.classList.add('bg-default-50')
    return () => {
      document.body.classList.remove('bg-default-50')
    }

  }, [])

//   if (status == 'unauthenticated') {
//     router.replace('/auth/sign-in')
//     return null
//   }

//   if (status == 'loading') {
//     return <NextTopLoader color="#ea580c" showSpinner={false} />
//   }

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
