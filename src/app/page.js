import { getUser, createUser, updateUser } from "./api/user";
import { useRouter } from "next/navigation";

import useToast from '@/hooks/use-hot-toast';

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowpassword] = useState(false)

  useEffect(() => {
    router.prefetch('/dashboard');
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    
    try {
      const res = await axios.post(`${process.env.MONGO_URI}/api/user`,user)
      if (res.status == 200){
        updateToast({
          toastId,
          message: 'Success Login',
          isError: false,
        });
      }
      const { id, username, name, email, password } = res.data;
        setTimeout(() => {
          signIn('credentials', {
            id,
            username,
            name,
            email,
            password,
          });
        }, 1000);
    } catch {
      console.error(error);
    }
    setLoading(false)
  }

  return (
    <>

    </>
  )
}
