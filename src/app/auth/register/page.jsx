"use client";
import { postUser, registerUser } from "@/helpers/user";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useToast from "@/hooks/useHotToast";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/Button";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [confirmPass, setConfirmPass] = useState("");
  const [role, setRole] = useState('user');
  const router = useRouter();
  const { updateToast, pushToast } = useToast();
  const { user, loginUser, logoutUser } = useAuth();

  // checking if user is already logged. Kak gem.
  useEffect(() => {
    if(user) {
      router.push('/');
    }
  }, []);

  // function handler
  const handleRegister = async (e) => {
    e.preventDefault();

    const toastId = pushToast({
      isLoading: true,
      message: "Mohon tunggu...",
    });
    try {
      if (inputs.password !== confirmPass) {
        throw new Error("Please Confirm the Password");
      }

      const response = await registerUser(inputs);
      if (response.data.message !== "Success") {
        throw Error(response.data.message);
      } else {
        loginUser({
          username: inputs.username,
          password: inputs.password
        });
        updateToast({
          toastId,
          message: "Berhasil",
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
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen align-middle">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl p-7 shadow-md">
            <a className="block text-green-600" href="#">
              <span className="sr-only">Home</span>
            </a>

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
                <Button onClick={(e) => setRole(e.target.value)} value={"user"} className={`${role === 'user' ? 'bg-blue-500 ring-blue-500 hover:bg-blue-600 focus:ring-blue-500' : ''}`}>User</Button>
                <Button.secondary onClick={(e) => setRole(e.target.value)} value={"dokter"} className={`${role === 'dokter' ? 'bg-blue-500 ring-blue-500 hover:bg-blue-600 focus:ring-blue-500' : ''}`} >Dokter</Button.secondary>
              </div>
            </div>

            {
              role === 'user' ? (
                
                // user form
                <form
                  onSubmit={handleRegister}
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
                        setInputs((prev) => ({ ...prev, username: e.target.value }))
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
                        setInputs((prev) => ({ ...prev, password: e.target.value }))
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
                      confirmPass && inputs.password !== confirmPass ? "" : "hidden"
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
                      <Button onClick={handleRegister}>
                        Buat Akun
                      </Button>
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <a href="/auth/login" className="text-gray-700 underline p-1">
                        Log in
                      </a>
                    </p>
                  </div>
                </form>
              ) : (

                // dokter form
              <form action="" className="">
                <div className="text-dark">
                  <h1>From Dokter</h1>
                </div>
              </form>

              )
            }

            {/* form dokter */}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;