'use client'
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const {user} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!user) router.push('/');
  }, [])
  
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col md:flex-row md:items-start">
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <div className="w-32 h-32">
          <Image
            src="/path/to/your/profile-image.jpg" // Ganti dengan path gambar yang sesuai
            alt="User Profile"
            className="rounded-lg object-cover"
            width={128}
            height={128}
          />
        </div>
      </div>
      <div className="flex-1 md:ml-6">
        <h1 className="text-2xl font-semibold mb-2 text-[var(--title-color)]">{user?.name}</h1>
        <p className="text-gray-700 mb-4">
          Deskripsi singkat tentang pengguna. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore cumque quidem, vero libero voluptatem, aliquid reiciendis corporis eum culpa magnam dolorem, nemo obcaecati? Aspernatur esse officia harum voluptates ratione.
        </p>
        <div className="flow-root">
          <dl className="divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Umur</dt>
              <dd className="text-gray-700 sm:col-span-2">{user?.age ? user.age : "-"}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Email</dt>
              <dd className="text-gray-700 sm:col-span-2">{user?.email}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Salary</dt>
              <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Bio</dt>
              <dd className="text-gray-700 sm:col-span-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                facilis debitis explicabo doloremque impedit nesciunt dolorem
                facere, dolor quasi veritatis quia fugit aperiam aspernatur neque
                molestiae labore aliquam soluta architecto?
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Page;