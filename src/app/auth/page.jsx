'use client';

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthPage = () => {
    const router = useRouter();
    const {user} = useAuth();

    useEffect(() => {
        if(user) router.push('/');
    }, [])
    return (
        <>
        </>
    )
};
export default AuthPage;