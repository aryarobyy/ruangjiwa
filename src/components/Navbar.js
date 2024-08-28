"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { useAuth } from "@/context/AuthContext";
import useToast from "@/hooks/useHotToast";
import { useRouter } from "next/navigation";
import ToggleMode from "./ToggleMode";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const { pushToast, updateToast } = useToast();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu mobile
  const menuRef = useRef(null); // Ref untuk menu dropdown
  const burgerButtonRef = useRef(null); // Ref untuk button burger

  const handleLogout = async () => {
    const toastId = pushToast({
      message: "Ditunggu ya!...",
      isLoading: true,
    });
    try {
      await logoutUser();
      updateToast({
        toastId,
        message: "Berhasil logout!",
      });
    } catch (error) {
      console.error(error.message);
      updateToast({
        toastId,
        message: error.message,
        isError: true,
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !burgerButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-[var(--hero-bg-color)] relative z-40">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 flex items-center justify-between md:justify-center gap-4">
              <div className="flex items-center">
                <Link className="block text-[var(--button-bg-color)]" href="/">
                  <span className="sr-only">Home</span>
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    className="rounded-md object-contain max-w-full h-auto"
                    width={64}
                    height={29}
                  />
                </Link>
                <div className="ml-4 mt-2">
                  <ToggleMode />
                </div>
              </div>

              <nav className="hidden md:flex items-center gap-6 flex-grow justify-center">
                <Link
                  className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                  href="/contact"
                >
                  Contact
                </Link>
                <Link
                  className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                  href="/services"
                >
                  Services
                </Link>
                <Link
                  className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                  href="/article"
                >
                  Article
                </Link>
                <Link
                  className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                  href="/journals"
                >
                  FAQ
                </Link>
                <Link
                  className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                  href="/ruang-meditasi"
                >
                  Ruang Meditasi
                </Link>
                <Link
                  className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                  href={`/aichat/${user ? user.username : "guest"}`}
                >
                  IMU ChatBot
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-3 ml-4">
              {user?.role === "user" ? (
                <>
                  <Button onClick={() => router.push("/profile")}>
                    Profile
                  </Button>
                  <Button.danger onClick={handleLogout}>Logout</Button.danger>
                </>
              ) : user?.role === "admin" ? (
                <Button onClick={() => router.push("/admin/dashboard")}>
                  Dashboard
                </Button>
              ) : user?.role === "dokter" ? (
                <>
                  <Button onClick={() => router.push("/dokter/dashboard")}>
                    Dashboard
                  </Button>
                  {!user?.isApproved && (
                    <Button.danger onClick={handleLogout}>Logout</Button.danger>
                  )}
                </>
              ) : (
                <>
                  <Button onClick={() => router.push("/auth/login")}>
                    Login
                  </Button>
                  <Button.tertary onClick={() => router.push("/auth/register")}>
                    Register
                  </Button.tertary>
                </>
              )}

              {/* Button burger */}
              <button
                ref={burgerButtonRef}
                onClick={toggleMenu}
                className="md:hidden p-2 text-gray-600 hover:bg-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Menu</span>
                <Image
                    src="/list2.svg"
                    alt="list"
                    className="rounded-md"
                    width={45}
                    height={29}
                  />
                  <path d="M4 6h16M4 12h16m-7 6h7" />
              </button>
            </div>
          </div>

          {/* Menu list for mobile view */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute top-16 right-0 w-64 bg-[var(--hero-bg-color)] shadow-lg rounded-md p-4 z-50"
            >
              <nav>
                <Link
                  className="block px-4 py-2 text-[var(--text-color)] hover:bg-gray-200 rounded-md"
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  className="block px-4 py-2 text-[var(--text-color)] hover:bg-gray-200 rounded-md"
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  className="block px-4 py-2 text-[var(--text-color)] hover:bg-gray-200 rounded-md"
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  className="block px-4 py-2 text-[var(--text-color)] hover:bg-gray-200 rounded-md"
                  href="/article"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Article
                </Link>
                <Link
                  className="block px-4 py-2 text-[var(--text-color)] hover:bg-gray-200 rounded-md"
                  href="/journals"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  className="block px-4 py-2 text-[var(--text-color)] hover:bg-gray-200 rounded-md"
                  href="/ruang-meditasi"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ruang Meditasi
                </Link>
                <Link
                  className="block px-4 py-2 text-[var(--text-color)] hover:bg-gray-200 rounded-md"
                  href={`/aichat/${user ? user.username : "guest"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  IMU ChatBot
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
