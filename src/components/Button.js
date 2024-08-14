import Link from "next/link";

const Button = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <Link
            className="rounded-md bg-[var(--button-bg-color)] px-5 py-2.5 text-sm font-medium text-[var(--button-text-color)] shadow transition hover:bg-[var(--button-hover-bg-color)] focus:ring focus:ring-[var(--button-focus-ring-color)]"
            href="/login"
          >
            Login
          </Link>

          <div className="hidden sm:flex">
            <Link
              className="rounded-md bg-[var(--button-secondary-bg-color)] px-5 py-2.5 text-sm font-medium text-[var(--button-bg-color)] transition hover:bg-[var(--button-secondary-hover-bg-color)]"
              href="/register"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-[var(--button-secondary-bg-color)] p-2 text-[var(--text-color)] transition hover:text-[var(--text-color)]/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
