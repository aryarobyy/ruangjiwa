'use client';

import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRoot = () => {
    return (
        <>
            <Navbar />
        </>
    )
};
export default AuthRoot;