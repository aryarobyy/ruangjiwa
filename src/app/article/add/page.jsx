'use client'
import Navbar from "@/components/Navbar";
import InputImage from "@/components/system/InputImage";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input"
import { postNewArtikel } from "@/helpers/artikel";
import { postImage } from "@/helpers/image";
import useToast from "@/hooks/useHotToast";
import { useState } from "react"

const MAX_TITLE_CHAR = 80; 
const MAX_DESC_CHAR = 600; 

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
  const [remainingCharTitle, setRemainingCharTitle] = useState(MAX_TITLE_CHAR);
  const [remainingCharDesc, setRemainingCharDesc] = useState(MAX_DESC_CHAR);
  
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
    const inpuTitle = e.target.value;
    if(inpuTitle.length > MAX_TITLE_CHAR ) {
      const finalTitle = inpuTitle.slice(0, MAX_TITLE_CHAR)
      setNewData((prev) => ({ ...prev, title: finalTitle }))
      setRemainingCharTitle(0);
    } else {
      setNewData((prev) => ({ ...prev, title: inpuTitle}))
      setRemainingCharTitle(MAX_TITLE_CHAR - inpuTitle.length)
    }
  }
  
  const handleChangeDesc = (e) => {
    const inpuDesc = e.target.value;
    if(inpuDesc.length > MAX_DESC_CHAR ) {
      const finalDesc = inpuDesc.slice(0, MAX_DESC_CHAR)
      setNewData((prev) => ({ ...prev, description: finalDesc }))
      setRemainingCharDesc(0);
    } else {
      setNewData((prev) => ({ ...prev, description: inpuTitle}))
      setRemainingCharDesc(MAX_DESC_CHAR - inpuDesc.length)
    }
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
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center p-10 bg-primary">
        <div className="w-fit flex flex-col gap-2">
          <h1>Testing Artikel Post page</h1>

          <Input placeholder="Judul artikel" onChange={handleChangeTitle} value={newData.title} />
          <Input placeholder="Deskripsi artikel" onChange={handleChangeDesc} value={newData.description} />
          <InputImage title={"Poster"} tempImg={tempImg} handleAddFileChange={handleFileChange} />
          <Button onClick={handleUploadImage}>Upload Gambar</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </>
  )
}

export default ArtikelAdd
