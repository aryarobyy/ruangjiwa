"use client";
import * as url from '@/helpers/endpointUrl';
import { getUserById } from '@/helpers/user';
import axiosInstance from "@/libs/axiosInterface";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading ] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');

        const verifyToken = async () => {
            try {
                const result = await axiosInstance.post(`${url.ENDPOINT_USER}/verifyToken`, {token});
                if(result.data.message === "Success") {
                    const userData = await getUserById(result.data.user.userId);
                    if(userData.data.message === "Success") {
                        setUser(userData.data.data);
                    } else {
                        throw new Error(userData.data.message);
                    };
                }
            } catch (error) {
                console.error(error.message);
                localStorage.removeItem('token');
            } finally {
                setLoading(false);
            }
        }

        if(token) {
            verifyToken();
        } else {
            setLoading(false);
        }
    }, []);

    const loginUser = async (data) => {
        try {
            const res = await axiosInstance.post(`${url.ENDPOINT_USER}/login`, data);

            if(res.data.message !== "Success") throw new Error(res.data.message);
            
            const {token, userData} = res.data;
            console.log(token, userData);

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
        console.log("test");
        try {
            localStorage.removeItem('token');
            setUser(null);
            // router.push('/');
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

export const useAuth = () => useContext(AuthContext);