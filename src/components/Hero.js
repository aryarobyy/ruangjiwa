"use client"
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const {user} = useAuth()
  console.log(user)
  return (
    <section className="relative overflow-hidden bg-[var(--hero-bg-color)] sm:grid sm:grid-cols-2">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--hero-bg-color)] to-transparent opacity-50"></div>
      
      <div className="relative z-10 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-[var(--title-color)] md:text-3xl">
            Prioritaskan Kesehatan Mental Anda
          </h2>

          <p className="mt-4 text-[var(--text-color)] md:text-lg">
            Kami di sini untuk mendukung Kamu dalam perjalanan menuju kesejahteraan emosional dan mental yang lebih baik.
          </p>

          <ul className="mt-6 space-y-4 text-left text-[var(--text-color)]">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-[var(--button-bg-color)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Pendekatan berbasis bukti</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-[var(--button-bg-color)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Sesi yang dapat disesuaikan</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-[var(--button-bg-color)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Akses ke sumber daya eksklusif</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-col items-center md:flex-row md:justify-start">
            <Link
              href="/auth/register"
              className="inline-block rounded bg-[var(--button-bg-color)] px-12 py-3 text-sm font-medium text-[var(--button-text-color)] transition hover:bg-[var(--button-hover-bg-color)] focus:outline-none focus:ring focus:ring-[var(--button-focus-ring-color)]"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="mt-4 md:mt-0 md:ml-4 inline-block rounded bg-transparent border border-[var(--button-bg-color)] px-12 py-3 text-sm font-medium text-[var(--button-bg-color)] transition hover:bg-[var(--button-bg-color)] hover:text-white focus:outline-none focus:ring focus:ring-[var(--button-focus-ring-color)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/landingPage.jpg"
        alt="Mental Health Support"
        className="rounded-lg object-cover"
        width={500}
        height={300}
        layout="responsive"
        quality={100}
        priority
      />
    </section>
  );
};

export default Hero;
