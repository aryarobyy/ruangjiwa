'use client'
import { ReactNode, Suspense, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import useToast from '@/hooks/useHotToast'
import TopBar from "@/components/adminComponent/TopBar"
const loading = () => <div />

const AdminLayout = ({ children }) => {
//   const router = useRouter()
//   const { status } = useSession()
  const {user} = useAuth();
  const router = useRouter();
  const {pushToast} = useToast();

  useEffect(() => {
    if(user?.role !== 'admin') {
      pushToast({
        message: "Anda tidak punya hak untuk mengakses ini",
        isError: true
      });
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
        <TopBar type="admin" />
      </Suspense>

      <Suspense fallback={loading()}>{children}</Suspense>
    </>
  )
}

export default AdminLayout
