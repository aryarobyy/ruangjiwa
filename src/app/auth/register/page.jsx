"use client"
import link from "next/link";
import { postUser  } from "@/helpers/user";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useToast from "@/hooks/useHotToast";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter()

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      const userData = await postUser(inputs);
      console.log("data", userData);
  
      console.log("Inputs", inputs);
    } catch (error) {
      console.error(error);
    }
  };
  

    return(
<section className="bg-white">

  <div className="lg:grid lg:min-h-screen align-middle">
    
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl p-7 shadow-md">
        <a className="block text-green-600" href="#">
          <span className="sr-only">Home</span>
        </a>

        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Welcome to Sahabat Medis
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
          quibusdam aperiam voluptatum.
        </p>

        <form action="#" onSubmit={handleSignIn} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <label htmlFor="NamaLengkap" className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>

            <input
              type="text"
              id="NamaLengkap"
              name="nama-lengkap"
              onChange={(e) => setInputs({...inputs,name: e.target.value})}
              value={inputs.name}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md p-2.5" required
            />
          </div>

          

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
              type="email"
              id="Email"
              name="email"
              onChange={(e) => setInputs({...inputs, email: e.target.value})}
              value={inputs.email}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md p-2.5" placeholder="Example@gmail.com" required
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              id="Password"
              name="password"
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
              value={inputs.password}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md p-2.5" required
            />
          </div>
{/* 
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
              value={inputs.confirmPassword}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md p-2.5" required
            />
          </div> */}

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" className="text-gray-700 underline p-1">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
              onClick={handleSignIn}
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <a href="#" className="text-gray-700 underline p-1">Log in</a>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
    )
}

export default Register;