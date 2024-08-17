"use client"

import { getUser } from "@/helpers/user"
import { useState } from "react"

//kalo butuh data user buat suatu page pake ini aja

const useGetUserProfile = async () => {
    const [user, setUser] = useState(null)

        try{
            const userId = localStorage.getItem("user-data");
            if(userId){
                const userData = await getUser(userId);
                setUser(userData);
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    return { user }
}

export default useGetUserProfile