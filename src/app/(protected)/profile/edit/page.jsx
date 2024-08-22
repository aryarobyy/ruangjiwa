"use client"

import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import React, { useState, useRef } from 'react';
import useToast from '@/hooks/useHotToast';
import { updateUser } from '@/helpers/user';
import { postImage } from '@/helpers/image';
import { CiCamera } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

function EditProfile() {
    const refAddFile = useRef(null);
    const { updateToast, pushToast } = useToast();
    const [tempImg, setTempImg] = useState('');
    const [file, setFile] = useState(null);
    const router = useRouter()
    const {user, editUser} = useAuth()
    const [update, setUpdate] = useState({
        userId: user?.userId,
        name: user?.name,
        username: user?.username,
        age: user?.age,
        medHistory: user?.medHistory,
        image: user?.image,
    });
    

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
    
        if (!selectedFile) {
            alert("Tolong pilih File");
            return;
        }
        setFile(selectedFile);
        const tempFile = URL.createObjectURL(selectedFile);
        setTempImg(tempFile);
    };

    // const handleUploadImage = async () => {
    //     const toastId = pushToast({
    //         message: "Mengupload gambar...",
    //         isLoading: true,
    //     });
    //     try {
    //         const imagePath = await postImage(file);
    //         setUpdate(prev => ({
    //             ...prev,
    //             image: imagePath.data.data,  
    //             date: new Date()
    //         }));
    
    //         updateToast({
    //             toastId,
    //             message: "sukses mengganti gambar",
    //         });
    //     } catch (error) {
    //         console.error(error.message);
    //         updateToast({
    //             toastId,
    //             message: "gagal untuk upload gambar",
    //             isError: true,
    //         });
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = pushToast({
            isLoading: true,
            message: "Ditunggu ya...",
        });

        try {
            if (!user.image && !file) {
                updateToast({
                    toastId,
                    message: "Mohon upload gambar!"
                })
                return
            }
            
            const response = await editUser(file, update) 
            console.log(response)
            if (response.data.message === "Success") {
                setUpdate({
                    name: "",
                    username: "",
                    age: "",
                    medHistory: "",
                    profilePic: "",
                    date: "",
                });
                updateToast({
                    toastId,
                    message: "Profile berhasil di perbarui",
                });
                router.push("/profile");
            } else {
                console.error("Update profile failed:", response.data.message);
                throw new Error(response.data.message)
            }
        } catch (error) {
            console.error("Error when updating:", error.message);
            updateToast({
                toastId,
                message: error.message,
                isError: true,
            });
        }
    };
    

    return (
        <section className="py-10 my-auto dark:bg-gray-900">
            <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
                    <div>
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                            Profile
                        </h1>
                        <h2 className="text-grey text-sm mb-4 dark:text-gray-400">Create Profile</h2>
                        <form onSubmit={handleSubmit}>
                        <div className="relative w-[141px] h-[141px] rounded-full mx-auto">
    {user?.image ? (
        <Image
            src={tempImg ? tempImg : user?.image}
            alt="Profile Image"
            width={141}
            height={141}
            className="w-full h-full rounded-full object-cover"
        />
    ) : (
        <Image
            src="/avatar.jpg"
            alt="Default Avatar"
            width={141}
            height={141}
            className="w-full h-full rounded-full object-cover"
        />
    )}

    <div className="absolute top-0 right-0 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
        <CiCamera
            className="w-5 h-5 text-blue-700"
            onClick={() => refAddFile.current.click()}
        />
    </div>

    <input 
        type="file" 
        ref={refAddFile} 
        style={{ display: 'none' }} 
        accept="image/*" 
        onChange={handleFileChange} 
    />
</div>

                            <h2 className="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile Image</h2>
                            
                            <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                <div className="w-full mb-4 mt-6">
                                    <label htmlFor="" className="mb-2 dark:text-gray-300">Name</label>
                                    <Input 
                                        type="text" 
                                        value={update.name}
                                        onChange={(e) => setUpdate({ ...update, name: e.target.value })}
                                    />
                                    <label htmlFor="" className="mb-2 dark:text-gray-300">Username</label>
                                    <Input 
                                        type="text" 
                                        value={update.username}
                                        onChange={(e) => setUpdate({ ...update, username: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                <div className="w-full">
                                    <h3 className="dark:text-gray-300 mb-2">Sex</h3>
                                    <select
                                        className="w-full text-grey h-10 border-2 rounded-lg p-4 pl-2 pr-2 border-neutral-300 text-dark bg-gray-50"
                                        value={update.sex}
                                        onChange={(e) => setUpdate({ ...update, sex: e.target.value })}
                                    >
                                        <option disabled value="">Select Sex</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <h3 className="dark:text-gray-300 mb-2">Usia</h3>
                                    <Input 
                                        type="text" 
                                        value={update.age}
                                        onChange={(e) => setUpdate({ ...update, age: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className='flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full'>
                                <div className="w-full mb-4 mt-6">
                                    <label htmlFor="" className="mb-2 dark:text-gray-300">Riwayat Penyakit</label>
                                    <Input 
                                        type="text" 
                                        value={update.medHistory}
                                        onChange={(e) => setUpdate({ ...update, medHistory: e.target.value })}
                                    />
                                </div>
                            </div>
                            <Button 
                                variant="default"
                                size="default"
                                className="bg-blue-600 dark:text-white mx-auto w-full my-4 hover:bg-blue-500"
                                type="submit"
                            >
                                Simpan Perubahan
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditProfile;
