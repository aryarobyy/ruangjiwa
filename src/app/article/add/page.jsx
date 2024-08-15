'use client'
import InputImage from "@/components/system/InputImage";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input"
import { postNewArtikel } from "@/helpers/artikel";
import { postImage } from "@/helpers/image";
import useToast from "@/hooks/useHotToast";
import { useState } from "react"

const ArtikelAdd = () => {
  const [tempImg, setTempImg] = useState('');
  const [file, setFile] = useState();
  const [newData, setNewData] = useState({
    creatorId: "creator123",
    name: "Cihuy",
    artikelId: "112233",
    title: "",
    description: "",
    image: "",
    date: ""
  });
  const {pushToast, updateToast} = useToast();
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if(!selectedFile) {
      alert("File nya belum ke upload");
      // atau pake toast
      return;
    }
    setFile(selectedFile);

    const tempFile = URL.createObjectURL(selectedFile);
    setTempImg(tempFile);
  }

  const handleChangeTitle = (e) => {
    setNewData(prev => ({...prev, title: e.target.value}))
  }
  
  const handleChangeDesc = (e) => {
    setNewData(prev => ({...prev, description: e.target.value}))
  }

  const handleUploadImage = async () => {
    const toastId = pushToast({
      message: "Mengupload gambar...",
      isLoading: true,
    });
    try {
      const imagePath = await postImage(file);
      setNewData(prev => ({...prev, 
        image: imagePath.data.data, 
        date: new Date()}));

      updateToast({
        toastId,
        message: "Berhasil upload gambar"
      })
    } catch (error) {
      console.error(error.message);
      updateToast({
        toastId,
        message: "Gagal upload gambar",
        isError: true
      })
    }
  };

  const handleSubmit = async () => {
    if(!(newData.title, newData.description, newData.image)) {
      const toastId = pushToast({
        message: "Harap masukkan form dengan benar",
        isError: true
      })

    }
    const toastId = pushToast({
      message: "Membuat artikel baru...",
      isLoading: true
    })
    try {
      console.log(newData)
      // upload ke db
      // const result = await postNewArtikel(newData);
      // if(result.data.message !== "Success") throw new Error("Gagal Membuat Artikel");

      updateToast({
        message: "Cek Data di Console info",
        toastId
      })
      setNewData({
        artikelId: '',
        title: '',
        description: '',
        image: '',
        date: ''
      });
      setTempImg('');
    } catch (error) {
      console.error(error.message);
      updateToast({
        message: "Gagal membuat artikel baru",
        toastId,
        isError: true
      })
    }
  };

  return (
    <div className="w-full flex justify-center items-center p-10">
      <div className="w-fit flex flex-col gap-2">
        <h1>Testing Artikel Post page</h1>

        <Input placeholder="Judul artikel" onChange={handleChangeTitle} value={newData.title} />
        <Input placeholder="Deskripsi artikel" onChange={handleChangeDesc} value={newData.description} />
        <InputImage title={"Poster"} tempImg={tempImg} handleAddFileChange={handleFileChange} />
        <Button onClick={handleUploadImage}>Upload Gambar</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}

export default ArtikelAdd
