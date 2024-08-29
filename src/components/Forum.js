import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Forum = ({ forum, user }) => {
    const router = useRouter();
    return (
        <div
            key={forum.forumId}
            className="flex gap-3 mb-4 py-5 cursor-pointer"
            onClick={() => router.push(`/forum/${forum.forumId}`)}
        >
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex w-full">

                    <Link href={`/profile/${forum.postedBy}`}>
                        <div className="flex items-center w-full">
                            <Image
                                src={user.profilePic || "/avatar.jpg"}
                                className="w-8 h-8 rounded-full mr-2"
                                alt="verified"
                                width={400}
                                height={400}
                            />
                            <p
                                className="text-sm font-bold cursor-pointer "
                                onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(`/profile/${forum.postedBy}`);
                                }}
                            >
                                {forum.postedBy}
                            </p>
                        </div>
                    </Link>

                    <div className="flex gap-4 items-center">
                        <p className="text-xs w-36 text-right text-gray-400">
                            {new Date(forum.date).toLocaleDateString()} ago
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-lg mb-2'>{forum.title}</h1>
                    <p className="text-sm ">{forum.content}</p>
                </div>
                {forum.forumImage && (
                    <div className="rounded overflow-hidden border border-gray-300 w-full h-64 relative">
                        <Image
                            src={forum.forumImage}
                            alt="post"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Forum;
