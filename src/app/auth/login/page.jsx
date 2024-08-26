"use client";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/context/AuthContext";
import useToast from "@/hooks/useHotToast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [role, setRole] = useState('user');
  const router = useRouter();
  const {loginUser, user, loginDokter} = useAuth();
  const {pushToast, updateToast} = useToast();

  useEffect(() => {
    if(user) router.push('/');
  }, [])  

  // handler funtion
  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = pushToast({
      message: "Ditunggu ya!...",
      isLoading: true
    });

    try {
      if(role === 'user') {
        await loginUser(data);
      } else if(role === 'dokter') {
        await loginDokter(data);
      } else {
        throw new Error("Ops! Sepertinya ada masalah! Coba lagi nanti!");
        
      }
      updateToast({
        toastId,
        message: "Berhasil Login",
      })
    } catch (error) {
      console.error(error.message);
      updateToast({
        toastId,
        message: error.message,
        isError: true
      })

    }
  }

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen align-middle">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl p-7 shadow-md">
            <a className="block text-green-600" href="#">
              <span className="sr-only">Home</span>
              <Image src="/logo.svg" alt="logo" className="rounded-md" width={64} height={29} />
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Selamat datang kembali
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <div className="text-gray-500 w-full text-center flex flex-col gap-2">
              <h1 className="font-semibold">Login sebagai:</h1>
              <div className="flex gap-3 items-center justify-center">
                <Button onClick={(e) => setRole(e.target.value)} value={"user"} className={`${role === 'user' ? 'bg-blue-500 ring-blue-500 hover:bg-blue-600 focus:ring-blue-500' : ''}`}>User</Button>
                <Button.secondary onClick={(e) => setRole(e.target.value)} value={"dokter"} className={`${role === 'dokter' ? 'bg-blue-500 ring-blue-500 hover:bg-blue-600 focus:ring-blue-500' : ''}`} >Dokter</Button.secondary>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>

                <Input
                  type={"text"}
                  value={data.username}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, username: e.target.value }))
                  }
                  placeholder={"Username"}
                  required
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <Input
                  type={"password"}
                  value={data.password}
                  onChange={(e) => setData(prev => ({...prev, password: e.target.value}))}
                  placeholder={"Sandi Password"}
                  required
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button onClick={handleSubmit}>
                  Login
                </Button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Belum Punya Akun?
                  <a href="/auth/register" className="text-gray-700 underline p-1">
                    Buat akun
                  </a>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
