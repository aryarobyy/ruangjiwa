"use client";
import * as url from '@/helpers/endpointUrl';
import axiosInstance from "@/libs/axiosInterface";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { postImage } from '@/helpers/image';
import { updateUser } from '@/helpers/user';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading ] = useState(true);
    const router = useRouter();
    


    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token)

        const verifyToken = async () => {
            try {
                const result = await axiosInstance.post(`${url.ENDPOINT_USER}/verifyToken`, {token});
                if(result.data.message === "Success") {

                    // !! get data from database or for alternatif to better rendering get data from localstorage. Kak gem !!

                    // const userData = await getUserById(result.data.user.userId);
                    // if(userData.data.message === "Success") {
                    //     setUser(userData.data.data);
                    // } else {
                    //     throw new Error(userData.data.message);
                    // };

                    const userData = localStorage.getItem('userData');
                    
                    if(!userData) {
                        localStorage.removeItem('token');
                    } else {
                        const parsedData = JSON.parse(userData);
                        setUser(parsedData);
                    }
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

            // simpen di localstorage token sama data nya;
            localStorage.setItem('token', token);
            localStorage.setItem('userData', JSON.stringify(userData));
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
            localStorage.removeItem('userData');
            setUser(null);
            router.push('/');
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    };

    const editUser = async (file, data) => {
        const tempData = {...data};
        try{
            const imagePath = await postImage(file);
            const newData = {...tempData, profilePic: imagePath.data.data}
            console.log("Sukses update data")
            const response = updateUser(newData.username, newData)
            localStorage.setItem("userData", JSON.stringify(newData))
            setUser(newData)
            return response
        } catch (error){
            console.error("Something error", error.message)
            throw error
        }
    }

    return(
        <AuthContext.Provider value={{ user, loginUser, logoutUser, editUser, loading}}>
            {!loading && children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
