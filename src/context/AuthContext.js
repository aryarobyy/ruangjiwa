"use client";
import * as url from '@/helpers/endpointUrl';
import axiosInstance from "@/libs/axiosInterface";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading ] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if(token) {
            axiosInstance.post(`${url.ENDPOINT_USER}/verifyToken`, {token})
                .then((res) => {
                    setUser(res.data.user);
                })
                .catch(() => {
                    localStorage.removeItem('token');
                })
                .finally(() => {
                    setLoading(false);
                })
        } else {
            setLoading(false);
        }
    }, []);

    const loginUser = async (data) => {
        try {
            const res = await axiosInstance.post(`${url.ENDPOINT_USER}/login`, data);
            const {token, userData} = res.data.data;

            // simpen di localstorage token nya;
            localStorage.setItem('token', token);
            setUser(userData);
            router.push('/');
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    };
    
    const logoutUser = async () => {
        try {
            localStorage.removeItem('token');
            setUser(null);
            router.push('/');
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    };

    return(
        <AuthContext.Provider value={{ user, loginUser, logoutUser, loading}}>
            {!loading && children}
        </AuthContext.Provider>
    )
};
