"use client";
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

  return (
    <>
      <header className="bg-[var(--hero-bg-color)]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <div className="flex items-center">
                <Link className="block text-[var(--button-bg-color)]" href="/">
                  <span className="sr-only">Home</span>
                  <Image src="/logo.svg" alt="logo" className="rounded-md" width={64} height={29} />
                </Link>
                <div className="ml-4">
                  <ToggleMode />
                </div>
              </div>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                      href="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                      href="/article"
                    >
                      Article
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                      href="/journals"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                      href="/ruang-meditasi"
                    >
                      Ruang Meditasi
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                      href={`/aichat/${user ? user.username : "guest"}`}
                    >
                      IMU ChatBot
                    </Link>
                  </li>
                </ul>
              </nav>
              {user?.role === "user" ? (
                <div className="flex gap-3 items-center justify-center">
                  <Button onClick={() => router.push("/profile")}>
                    Profile
                  </Button>
                  <Button.danger onClick={handleLogout}>
                    Logout
                  </Button.danger>
                </div>
              ) : user?.role === "admin" ? (
                <>
                  <Button onClick={() => router.push("/admin/dashboard")}>
                    Dashboard
                  </Button>
                  <Button.danger onClick={handleLogout}>
                    Logout
                  </Button.danger>
                </>
              ) : user?.role === "dokter" ? (
                <Button onClick={() => router.push("/dokter/dashboard")}>
                  Dashboard
                </Button>
              ) : (
                <div className={`flex gap-3 items-center justify-center`}>
                  <Button onClick={() => router.push("/auth/login")}>
                    Login
                  </Button>
                  <Button.tertary onClick={() => router.push("/auth/register")}>
                    Register
                  </Button.tertary>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
