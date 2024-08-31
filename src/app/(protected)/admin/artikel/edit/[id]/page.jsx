"use client";
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import InputImage from "@/components/system/InputImage";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Textarea from "@/components/ui/TextArea";
import { useAuth } from "@/context/AuthContext";
import { getArtikelById, postNewArtikel, updateArtikel } from "@/helpers/artikel";
import { postFile } from "@/helpers/image";
import useToast from "@/hooks/useHotToast";
import { useEffect, useState } from "react";

const AdminArtikelEdit = ({params}) => {
  const [tempData, setTempData] = useState({});
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const { pushToast, updateToast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    getArtikelData();
  }, []);

  const getArtikelData = async () => {
    setLoading(true);
    try {
      const { data } = await getArtikelById(params.id);
      setTempData(data.data);
    } catch (error) {
      console.error(error.message);
      pushToast({
        message: "Gagal mendapatkan artikel",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      pushToast({
        message: "Image belum terunggah",
        isError: true,
      });
      return;
    }
    setFile(selectedFile);
    setTempData({...tempData, imgUrl: URL.createObjectURL(selectedFile)});
  };

  const handleSubmit = async () => {
    const newData = {
      ...tempData,
      date: new Date(),
    };

    const toastId = pushToast({
      message: "Memperbarui Artikel...",
      isLoading: true,
    });
    try {
      if (!tempData.imgUrl) throw new Error("Image belum terunggah");

      const result = await postFile(file);

      if (result.data.message !== "Success")
        throw new Error(result.data.message);

      newData.imgUrl = result.data.data;

      const response = await updateArtikel(params.id, newData);
      if (response.data.message !== "Success")
        throw new Error(response.data.message);

      updateToast({
        message: "Sukses Memperbarui Artikel!",
        toastId,
      });

      setTempData({ description: "", imgUrl: "", title: "" });
    //   setTempImg("");
    } catch (error) {
      console.error(error.message);
      updateToast({
        toastId,
        message: error.message,
        isError: true,
      });
    }
  };

  return (
    <div className="text-dark bg-primary border-2 border-white">
      <AdminBreadcrumb title={"Tambah Artikel"} />
      <div className="px-8 pb-8">
        <div className="rounded-md border border-default-200 bg-white dark:bg-default-50 w-full">
          <div className="border-b border-default-200 px-6 py-3 text-center">
            <h4 className="text-lg text-dark">{"Buat Artikel Baru"}</h4>
          </div>

          <div className="h-[400px] scroll-smooth overflow-y-auto [&::-webkit-scrollbar-track]:!bg-transparent [&::-webkit-scrollbar]:w-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            <div className=" lg:col-span-2 gap-3 flex-col flex">
              <Label>Judul Artikel</Label>
              <Input
                placeholder={"Judul Artikel"}
                value={tempData.title}
                onChange={(e) =>
                  setTempData({ ...tempData, title: e.target.value })
                }
              />
              <Label>Deskripsi Artikel</Label>
              <Textarea
                id="description"
                name="description"
                value={tempData.description}
                onchange={(e) =>
                  setTempData({ ...tempData, description: e.target.value })
                }
                placeholder="Deskripsi Artikel"
                className={"h-full"}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Poster Artikel</Label>
              <InputImage
                handleAddFileChange={handleFileChange}
                tempImg={tempData.imgUrl}
                title={"Poster"}
                className={""}
              />
            </div>
          </div>
          <div className="w-full px-4 my-6">
            <Button onClick={handleSubmit} className={"w-full"}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminArtikelEdit;
