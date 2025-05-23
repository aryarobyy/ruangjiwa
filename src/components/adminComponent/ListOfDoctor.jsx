import Image from "next/image";
import Link from "next/link";
import { LuUserCircle } from "react-icons/lu";
import { Eye, UserCog } from "lucide-react";
import LoadingSection from "../system/LoadingSection";

const ListOfDoctor = ({data, title, type, isGettingData}) => {
  return (
    <div className="rounded-md border border-default-200 bg-white dark:bg-default-50">
      <div className="border-b border-default-200 px-6 py-3">
        <h4 className="text-lg text-dark">{title}</h4>
      </div>
      <div className={`max-h-[440px] h-fit ${isGettingData ? 'h-[200px]' : 'h-fit'} divide-y divide-default-200 overflow-y-auto [&::-webkit-scrollbar-track]:!bg-transparent [&::-webkit-scrollbar]:w-1`}>
        {
          isGettingData ? (
            <div className="w-full h-full items-center flex justify-center p-8">
              <LoadingSection />
            </div>
          ) : !data || data.length <= 0 ? (
              <div className="w-full p-4 h-full flex flex-col items-center justify-center">
                <div className="w-full p-3 text-center">
                  <h2>{`Sepertinya Belum Terdapat Dokter yang ${type}`}</h2>
                </div>
              </div>
          ) : 
          data?.map((dokter, idx) => {
            return (
              <div key={idx} className="flex items-center p-2.5 px-4 gap-2">
                {
                  dokter.profilePic ? (
                    <Image
                      src={dokter.profilePic}
                      width={48}
                      height={48}
                      className="me-3 w-10 h-10 rounded-full"
                      alt="dokter"
                    />
                  ) : (
                    <div className="">
                      <LuUserCircle className="rounded-full h-8 w-full" />
                    </div>
                  )
                }
                <div className="flex-grow">
                  <h5 className="mt-1 text-dark">{dokter.name}</h5>
                  <h6 className="mt-1 text-dark">{dokter.specialis}</h6>
                </div>
                <div className="h-4">
                  <div className="hs-dropdown relative inline-flex [--placement:left-top] rtl:[--placement:bottom-left]">
                    <Link href={`dokter/${dokter.username}`} className="rounded">
                      {
                        type === 'active' ? <Eye className="size-4" /> : <UserCog className="size-4" />
                      }
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ListOfDoctor;
