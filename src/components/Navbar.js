import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <header className="bg-[var(--hero-bg-color)]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-[var(--button-bg-color)]" href="/">
                <span className="sr-only">Home</span>
                <Image src="/logo.svg" alt="logo" width={64} height={29} />
              </Link>
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
                      href="/ruangMeditasi"
                    >
                      Ruang Meditasi
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[var(--text-color)] text-base transition hover:text-[var(--button-hover-bg-color)]"
                      href="/profile"
                    >
                      Profile sementara
                    </Link>
                  </li>

                </ul>
              </nav>
              <Button />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
