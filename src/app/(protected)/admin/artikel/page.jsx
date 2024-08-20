'use client'
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import { Input } from "@/components/ui/Input";

const AdminArtikel = () => {

    return (
    <div className="text-dark bg-primary border-2 border-white">
        <AdminBreadcrumb title={"Artikel"} />
        <div className="px-8">
        <div className="rounded-md border border-default-200 bg-white dark:bg-default-50 w-full">
            <div className="border-b border-default-200 px-6 py-3 text-center">
              <h4 className="text-lg text-dark">{"Buat Artikel Baru"}</h4>
            </div>

            <div className="h-[500px] scroll-smooth p-2 overflow-y-auto [&::-webkit-scrollbar-track]:!bg-transparent [&::-webkit-scrollbar]:w-1 grid sm:grid-cols-2 md:grid-cols-2 gap-2">
                <Input placeholder={"Judul Artikel"} />

            </div>
          </div>
        </div>
    </div>
        
    )
};

export default AdminArtikel;