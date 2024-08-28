import Link from "next/link";

const FaqBox = () => {
  return (
    <div className="space-y-4">
      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[var(--compo-color)] p-4 text-[var(--title-color)]">
          <h2 className="font-medium ">
            Apa saja fitur yang ditawarkan oleh web kesehatan mental ini?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-[var(--text-color)]">
          Kami menyediakan fitur-fitur utama yang membantu anda untuk memecahkan
          masalah kesehatan mental ini seperti{" "}
          <i className="font-medium text-[var(--title-color)]">
            Bot chat, Ruang Meditasi, Forum, dan Artikel terkait kesehatan
            mental.
          </i>
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[var(--compo-color)] p-4 text-[var(--title-color)]">
          <h2 className="font-medium">
            Seberapa aman data pribadi user di web ini?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-[var(--text-color)]">
          Kami sangat menghargai privasi dan keamanan data pribadi user. Website
          ini menggunakan teknologi enkripsi canggih untuk memastikan bahwa data
          Anda aman dan tidak dapat diakses oleh pihak ketiga tanpa izin. Kami
          mematuhi standar perlindungan data internasional untuk menjaga
          kerahasiaan informasi Anda.
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[var(--compo-color)] p-4 text-[var(--title-color)]">
          <h2 className="font-medium">
            Apakah fitur meditasi bisa diakses tanpa mambuat akun?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-[var(--text-color)]">
        Beberapa fitur seperti fitur <Link className="text-[var(--button-focus-ring-color)] text-medium italic" href="/ruang-meditasi" > Ruang Meditasi</Link> mungkin dapat diakses tanpa akun, namun untuk pengalaman yang lebih baik, kami menyarankan untuk membuat akun terlebih dahulu. 
        </p>
      </details>
    </div>
  );
};

export default FaqBox;
