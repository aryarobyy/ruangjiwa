'use client'
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import KonsulCard from "@/components/cards/KonsulCard";
import MessageKonsulCard from "@/components/cards/MessageKonsulCard";

const KonsulDokterPage = () => {
    return (
        <div className="text-dark bg-primary border-2 border-white">

        <section>
            <div className="px-8 w-full h-screen flex justify-center items-center text-center font-bold text-lg">
                <h1>{`Still in Development :)`}</h1>
            </div>
          <div className="px-8 hidden">
            <div className="my-6 space-y-6">
                <div className="md:grid md:grid-cols-2 gap-4 flex flex-col-reverse">
                    <div className="w-full flex flex-col gap-2">
                        <h1 className="text-center text-dark font-semibold">Konsultasi anda</h1>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center max-h-96 overflow-auto">
                            {
                                Array(10).fill(null).map((e, idx) => <KonsulCard key={idx} />)
                            }
                        </div>
                    </div>
                    <div className="grid col-span-1">
                        <MessageKonsulCard />
                    </div>
                </div>
            </div>
          </div>
        </section>
      </div>
    )
};

export default KonsulDokterPage;