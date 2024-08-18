"use client"

import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import React, { useState, useRef } from 'react';
import useToast from '@/hooks/useHotToast';
import { updateUser } from '@/helpers/user';
import { postImage } from '@/helpers/image';
import { CiCamera } from "react-icons/ci";
import { useRouter } from 'next/navigation';

function EditProfile() {
    const refAddFile = useRef(null);
    const { updateToast, pushToast } = useToast();
    const [tempImg, setTempImg] = useState('');
    const [file, setFile] = useState(null);
    const router = useRouter()
    const [update, setUpdate] = useState({
        name: "",
        username: "",
        age: "",
        medHistory: "",
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

    const handleUploadImage = async () => {
        const toastId = pushToast({
            message: "Mengupload gambar...",
            isLoading: true,
        });
        try {
            const imagePath = await postImage(file);
            setUpdate(prev => ({
                ...prev,
                image: imagePath.data.data,  
                date: new Date()
            }));
    
            updateToast({
                toastId,
                message: "sukses mengganti gambar",
            });
        } catch (error) {
            console.error(error.message);
            updateToast({
                toastId,
                message: "gagal untuk upload gambar",
                isError: true,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = pushToast({
            isLoading: true,
            message: "Mohon tunggu...",
        });

        try {
            if (file) {
                await handleUploadImage();
            }

            // console.log("Data to update:", update);

            const response = await updateUser(update);
            console.log("Respon data setelah update:", response.data);
            
            if (response.data.message === "Success") {
                console.log("User data terupdate:", response.data.userData);
                setUpdate({
                    name: "",
                    username: "",
                    age: "",
                    medHistory: "",
                    image: "",
                    date: "",

                });
                updateToast({
                    toastId,
                    message: "Profile berhasil di perbarui",
                });
                router.push("/profile");
            } else {
                console.log("Update profile gagal:", response.data.message);
            }
        } catch (error) {
            console.error("Error ketika update", error);
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
                            <div className="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
                                <div 
                                    className={`mx-auto flex justify-center w-[141px] h-[141px] rounded-full bg-cover bg-center bg-no-repeat`}
                                    style={{ backgroundImage: `url(${tempImg || 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080'})` }}
                                >
                                    <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                                        <CiCamera className='w-6 h-5 text-blue-700 cursor-pointer' onClick={() => refAddFile.current.click()} />
                                        <input 
                                            type="file" 
                                            ref={refAddFile} 
                                            style={{ display: 'none' }} 
                                            accept="image/*" 
                                            onChange={handleFileChange} 
                                        />
                                    </div>
                                </div>
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
