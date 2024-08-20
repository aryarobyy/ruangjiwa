'use client';

import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRoot = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
};
export default AuthRoot;