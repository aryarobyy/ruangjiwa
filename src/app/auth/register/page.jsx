"use client";
import { postUser, registerUser } from "@/helpers/user";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useToast from "@/hooks/useHotToast";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { registerDokter } from "@/helpers/dokter";
import { postFile } from "@/helpers/image";
import Textarea from "@/components/ui/TextArea";
import InputImage from "@/components/system/InputImage";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [inputDokter, setInputDokter] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    bio: "",
    profilePic: "",
    spesialis: "",
    ijazah: "",
    cv: "",
  });
  const [confirmPass, setConfirmPass] = useState("");
  const [role, setRole] = useState("user");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [tempImg, setTempImg] = useState('');
  const router = useRouter();
  const { updateToast, pushToast } = useToast();
  const { user, loginUser, loginDokter } = useAuth();
  const [imgFile, setImgFile] = useState();
  const [cvFile, setCvFile] = useState();
  const [ijazahFile, setIjazahFile] = useState();

  // checking if user is already logged in
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);

  // function handler for registration
  const handleRegisterUser = async (e) => {
    e.preventDefault();

    if (isSubmiting) return;

    setIsSubmiting(true);

    const toastId = pushToast({
      isLoading: true,
      message: "Ditunggu ya!...",
    });
    try {
      if (inputs.password !== confirmPass) {
        throw new Error("Tolong konfirmasi password");
      }

      const response = await registerUser(inputs);
      if (response.data.message !== "Success") {
        throw Error(response.data.message);
      } else {
        loginUser({
          username: inputs.username,
          password: inputs.password,
        });

        updateToast({
          toastId,
          message: "Berhasil!",
        });
        setInputs({
          name: "",
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);
      updateToast({
        toastId,
        message: error.message,
        isError: true,
      });
    } finally {
      setIsSubmiting(false);
    }
  };

  const handleRegisterDokter = async (e) => {
    e.preventDefault();

    if (isSubmiting) return;

    setIsSubmiting(true);
    const toastId = pushToast({
      isLoading: true,
      message: "Mohon ditunggu!\nIni akan sedikit memakan waktu.",
    });

    try {
      if (!cvFile || !ijazahFile || !imgFile)
        throw new Error("Tolong masukkan berkas dengan sesuai!");
      if (inputDokter.password !== confirmPass)
        throw new Error("Tolong konfirmasi password");

      const newData = { ...inputDokter };

      const urlProfile = await postFile(imgFile);
      if (urlProfile.data.message !== "Success")
        throw new Error(urlProfile.data.message);

      const urlCvFile = await postFile(cvFile);
      if (urlCvFile.data.message !== "Success")
        throw new Error(urlCvFile.data.message);

      
      const urlIjazahFile = await postFile(ijazahFile);
      if (urlIjazahFile.data.message !== "Success")
        throw new Error(urlCvFile.data.message);

      newData.profilePic = urlProfile.data.data;
      newData.cv = urlCvFile.data.data;
      newData.ijazah = urlIjazahFile.data.data;

      const response = await registerDokter(newData);
      if (response.data.message !== "Success") {
        throw Error(response.data.message);
      }

      loginDokter({
        username: inputDokter.username,
        password: inputDokter.password,
      });

      updateToast({
        toastId,
        message: "Berhasil!",
      });
      setInputDokter({
        name: "",
        username: "",
        email: "",
        password: "",
        ijazah: "",
        cv: "",
        bio: '',
        profilePic: "",
        spesialis: ""
      });
      setConfirmPass("");
    } catch (error) {
      console.error(error);
      updateToast({
        toastId,
        message: error.message,
        isError: true,
      });
    } finally {
      setIsSubmiting(false);
    }
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    const urlImg = URL.createObjectURL(selectedFile);
    setTempImg(urlImg);

    setImgFile(selectedFile);
  };
  
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen align-middle">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl p-7 shadow-md">
            <Image
              src="/logo.svg"
              alt="logo"
              className="rounded-md"
              width={64}
              height={29}
            />

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Selamat datang di Sahabat Medis
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <div className="text-gray-500 mt-4 w-full text-center flex flex-col gap-2">
              <h1 className="font-semibold">Buat Akun:</h1>
              <div className="flex gap-3 items-center justify-center">
                <Button
                  onClick={() => setRole("user")}
                  className={`${
                    role === "user"
                      ? "bg-blue-500 ring-blue-500 hover:bg-blue-600 focus:ring-blue-500"
                      : ""
                  }`}
                >
                  User
                </Button>
                <Button.secondary
                  onClick={() => setRole("dokter")}
                  className={`${
                    role === "dokter"
                      ? "bg-blue-500 ring-blue-500 hover:bg-blue-600 focus:ring-blue-500"
                      : ""
                  }`}
                >
                  Dokter
                </Button.secondary>
              </div>
            </div>

            {role === "user" ? (
              // user form
              <form
                onSubmit={handleRegisterUser}
                className={`mt-4 grid grid-cols-6 gap-4`}
              >
                <div className="col-span-6">
                  <label
                    htmlFor="NamaLengkap"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Nama Lengkap
                  </label>
                  <Input
                    type={"text"}
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder={"Nama Lengkap"}
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Username"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Username
                  </label>
                  <Input
                    type={"text"}
                    value={inputs.username}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                    placeholder={"Username"}
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Email
                  </label>
                  <Input
                    type={"email"}
                    value={inputs.email}
                    onChange={(e) =>
                      setInputs((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder={"Email"}
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Password
                  </label>
                  <Input
                    type={"password"}
                    value={inputs.password}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    placeholder={"Sandi Password"}
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Confirm Password
                  </label>
                  <Input
                    type={"password"}
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder={"Sandi Password"}
                    required
                  />
                </div>

                <div
                  className={`${
                    confirmPass && inputs.password !== confirmPass
                      ? ""
                      : "hidden"
                  } w-full text-center text-sm font-medium text-red-500 col-span-6`}
                >
                  <p>{"Password didn't match"}</p>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline">
                      {` terms and conditions `}
                    </a>
                    and
                    <a href="#" className="text-gray-700 underline p-1">
                      privacy policy.
                    </a>
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <Button disabled={isSubmiting} onClick={handleRegisterUser}>
                    Buat Akun
                  </Button>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a
                      href="/auth/login"
                      className="text-gray-700 underline p-1"
                    >
                      Log in
                    </a>
                  </p>
                </div>
              </form>
            ) : (
              // dokter form
              <form
                onSubmit={handleRegisterDokter}
                className={`mt-4 grid grid-cols-6 gap-4`}
              >
                <div className="col-span-6 grid sm:grid-cols-2 gap-2 items-stretch justify-between ">
                  <div className="">
                    <div className="w-full">
                      <label htmlFor="NamaLengkap" className="block text-sm font-medium text-gray-700 my-2">Nama Lengkap</label>
                      <Input
                        type={"text"}
                        value={inputDokter.name}
                        onChange={(e) =>
                          setInputDokter((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder={"Nama Lengkap"}
                        required
                      />
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="Username"
                        className="block text-sm font-medium text-gray-700 my-2"
                      >Username</label>
                      <Input
                        type={"text"}
                        value={inputDokter.username}
                        onChange={(e) =>
                          setInputDokter((prev) => ({
                            ...prev,
                            username: e.target.value,
                          }))
                        }
                        placeholder={"Username"}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full  flex items-center justify-center">
                        <InputImage className={"h-[200px]"} handleAddFileChange={handleImageChange} tempImg={tempImg} title={"Foto Profile"} />
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Email
                  </label>
                  <Input
                    type={"email"}
                    value={inputDokter.email}
                    onChange={(e) =>
                      setInputDokter((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder={"Email"}
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Ijazah"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Ijazah
                  </label>
                  <Input
                    type="file"
                    accept=".pdf"
                    className="cursor-pointer"
                    onChange={(e) => setIjazahFile(e.target.files[0])}
                    placeholder={"Ijazah"}
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="CV"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    CV
                  </label>
                  <Input
                    type="file"
                    accept=".pdf"
                    className="cursor-pointer"
                    onChange={(e) => setCvFile(e.target.files[0])}
                    placeholder={"CV"}
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Bio"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Bio
                  </label>

                  <Textarea
                    value={inputDokter.bio}
                    onchange={(e) =>
                      setInputDokter({ ...inputDokter, bio: e.target.value })
                    }
                    placeholder={
                      "Deskripsikan secara singkat tentang anda (min 250 huruf)"
                    }
                  />
                  <p
                    className={`text-sm text-red-600 ${
                      inputDokter.bio && inputDokter?.bio.length > 250
                        ? "hidden"
                        : ""
                    }`}
                  >
                    Jumlah kata belum memenuhi
                  </p>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Bidang Keahlian
                  </label>
                  <Input
                    type={"text"}
                    value={inputDokter.spesialis}
                    onChange={(e) =>
                      setInputDokter((prev) => ({
                        ...prev,
                        spesialis: e.target.value,
                      }))
                    }
                    placeholder={"Bidang Keahlian"}
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Password
                  </label>
                  <Input
                    type={"password"}
                    value={inputDokter.password}
                    onChange={(e) =>
                      setInputDokter((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    placeholder={"Sandi Password"}
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 my-2"
                  >
                    Confirm Password
                  </label>
                  <Input
                    type={"password"}
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder={"Sandi Password"}
                    required
                  />
                </div>

                <div
                  className={`${
                    confirmPass && inputDokter.password !== confirmPass
                      ? ""
                      : "hidden"
                  } w-full text-center text-sm font-medium text-red-500 col-span-6`}
                >
                  <p>{"Password didn't match"}</p>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline">
                      {` terms and conditions `}
                    </a>
                    and
                    <a href="#" className="text-gray-700 underline p-1">
                      privacy policy.
                    </a>
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <Button disabled={isSubmiting} onClick={handleRegisterDokter}>
                    Buat Akun Dokter
                  </Button>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a
                      href="/auth/login"
                      className="text-gray-700 underline p-1"
                    >
                      Log in
                    </a>
                  </p>
                </div>
              </form>
            )}
            
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
