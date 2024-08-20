'use client';

import Navbar from "@/components/Navbar";

const AuthRoot = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
};
export default AuthRoot;