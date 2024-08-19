import Navbar from "@/components/Navbar";
import Link from "next/link";

const Service = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-white text-black">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Pelayanan Kami</h2>

            <p className="mt-4 text-gray-700">
            Kami menyediakan berbagai layanan yang dirancang buat mendukung kesehatan mental dan kesejahteraan emosional Kamu lhoo. Tim ahli kami siap membantu Kamu dalam perjalanan menuju keseimbangan dan kebahagiaan emosional, Tetap semangat dan jangan mudah buat menyerah!
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4 bg-gray-200 p-4 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-300 p-4">
                <svg
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Mentor Ahli Psikologi</h2>

                <p className="mt-1 text-sm text-gray-700">
                <b><i>Bersama Profesional Terpercaya</i></b>
                <br/>
                Mentor kami memiliki latar belakang yang kuat dalam psikologi klinis dan konseling, serta telah membantu banyak individu untuk menemukan keseimbangan dan ketenangan dalam hidup mereka.
                </p>
              </div>
            </div>

            
            <div className="flex items-start gap-4 bg-gray-200 p-4 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-300 p-4">
                <svg
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Anonimitas Forum</h2>

                <p className="mt-1 text-sm text-gray-700">
                <b><i>Berbagi Tanpa Rasa Khawatir</i></b>
                <br/>
                  Kamu bisa mengikuti diskusi kami dan teman-teman lainnya. Bersama-sama, kita dapat saling mendukung dan belajar dari pengalaman satu sama lain.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-200 p-4 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-300 p-4">
                <svg
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Konsultasi Personal</h2>

                <p className="mt-1 text-sm text-gray-700">
                <b><i>Solusi yang Tepat untuk Kamu</i></b>
                <br/>
                Dapatkan sesi konsultasi personal yang disesuaikan dengan kebutuhan dan situasi unik Anda. Bersama konselor berpengalaman, Anda akan menemukan jalan keluar dari masalah dan mencapai tujuan kesehatan mental Anda.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-200 p-4 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-300 p-4">
                <svg
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Meditasi dan Relaksasi</h2>

                <p className="mt-1 text-sm text-gray-700">
                <b><i>Temukan Ketenangan di Tengah Kesibukan</i></b>
                <br/>
                Manfaatkan fitur meditasi yang dirancang untuk membantu Kamu melepaskan stres dan menemukan ketenangan. Nikmati panduan yang mudah diikuti kapan saja, di mana saja.<Link className="text-[var(--button-bg-color)]" href="/login" > pelajari lebih lanjut.</Link>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-200 p-4 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-300 p-4">
                <svg
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Saran dan Rekomendasi</h2>

                <p className="mt-1 text-sm text-gray-700">
                <b><i>Langkah Positif untuk Kehidupan Lebih Baik</i></b>
                <br/>
                Terima saran dan rekomendasi dari para ahli yang bisa Kamu lakukan buat ningkatin kesehatan mental dan kualitas hidup Kamu. Setiap rekomendasi didasarkan pada pendekatan holistik dan penelitian terbaru.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-200 p-4 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-300 p-4">
                <svg
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Jurnal Pribadi</h2>

                <p className="mt-1 text-sm text-gray-700">
                <b><i>Ekspresikan Diri dengan Jujur</i></b>
                <br/>
                Gunakan fitur ini sebagai sarana untuk menulis dan mencatat perjalanan emosional Kamu. Ini adalah tempat untuk merenung, memproses perasaan, dan melacak kemajuan kesehatan mental Kamu.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
