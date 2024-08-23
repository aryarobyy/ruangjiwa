import React, { useEffect, useState } from 'react';
import { DeleteIcon } from "@chakra-ui/icons";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import { getAllForum } from '@/helpers/forum';

const Post = () => {
    const { user } = useAuth();
    const navigate = useRouter();
    const [forums, setForums] = useState([]);

    useEffect(() => {
        getForum();
    }, []);

    const getForum = async () => {
        try {
            const response = await getAllForum();
            setForums(response.data.data);
        } catch (error) {
            console.error(error.message);
        } 
    };

    const handleDeletePost = (forumId) => {
        const newForums = forums.filter(item => item.forumId !== forumId);
        setForums(newForums);
    };

    return (
        <div>
            {forums.map((forum) => (
                <div key={forum.forumId} className="flex gap-3 mb-4 py-5">
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="flex justify-between w-full">
                            <div className="flex items-center w-full">
                                <p
                                    className="text-sm font-bold cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate.push(`/${forum.username}`);
                                    }}
                                >
                                    {forum.username}
                                </p>
                                <img src="/verified.png" className="w-4 h-4 ml-1" alt="verified" />
                            </div>
                            <div className="flex gap-4 items-center">
                                <p className="text-xs w-36 text-right text-gray-400">
                                    {new Date(forum.createdAt).toLocaleDateString()} ago
                                </p>
                                {user?.userId === forum.userId && (
                                    <DeleteIcon
                                        className="cursor-pointer"
                                        onClick={() => handleDeletePost(forum.forumId)}
                                    />
                                )}
                            </div>
                        </div>
                        <p className="text-sm">{forum.text}</p>
                        {forum.forumImage && (
                            <div className="rounded overflow-hidden border border-gray-300">
                                <Image src={forum.forumImage} alt="post" className="w-full" width={500} height={500} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Post;
