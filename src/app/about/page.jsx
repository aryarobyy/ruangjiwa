// import Image from "next/image";

// const About = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-semibold text-center text-gray-800">About Us</h2>
//         <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
//           Kami adalah tim yang berdedikasi untuk membantu Anda menemukan keseimbangan mental dan emosional. Dengan pendekatan berbasis ilmu pengetahuan dan empati, kami hadir untuk mendukung kesehatan mental Anda.
//         </p>

//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="flex items-center">
//             <Image
//               src="/.jpg"
//               alt="Anggota Tim 1"
//               className="w-24 h-24 rounded-full object-cover"
//               width={24} height={24}
//             />
//             <div className="ml-4">
//               <h3 className="text-lg font-semibold text-gray-800">Roby Aryanata</h3>
//               <p className="text-gray-600">Peran Anggota Tim 1</p>
//               <p className="mt-2 text-gray-500">
//                 Deskripsi singkat tentang Anggota Tim 1, latar belakang pendidikan atau profesional, dan apa yang membuat mereka bergairah dalam membantu orang lain.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center">
//             <Image
//               src="/.jpg"
//               alt="Anggota Tim 2"
//               className="w-24 h-24 rounded-full object-cover"
//               width={24} height={24}
//             />
//             <div className="ml-4">
//               <h3 className="text-lg font-semibold text-gray-800">Nama Anggota Tim 2</h3>
//               <p className="text-gray-600">Peran Anggota Tim 2</p>
//               <p className="mt-2 text-gray-500">
//                 Deskripsi singkat tentang Anggota Tim 2, latar belakang pendidikan atau profesional, dan kontribusinya dalam tim.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center">
//             <Image
//               src="/.jpg"
//               alt="Anggota Tim 3"
//               className="w-24 h-24 rounded-full object-cover"
//               width={24} height={24}
//             />
//             <div className="ml-4">
//               <h3 className="text-lg font-semibold text-gray-800">Nama Anggota Tim 3</h3>
//               <p className="text-gray-600">Peran Anggota Tim 3</p>
//               <p className="mt-2 text-gray-500">
//                 Deskripsi singkat tentang Anggota Tim 3, pengalaman kerja, dan peran khususnya dalam mendukung kesehatan mental.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center">
//             <Image
//               src="/.jpg"
//               alt="Anggota Tim 4"
//               className="w-24 h-24 rounded-full object-cover"
//               width={24} height={24}
//             />
//             <div className="ml-4">
//               <h3 className="text-lg font-semibold text-gray-800">Nama Anggota Tim 4</h3>
//               <p className="text-gray-600">Peran Anggota Tim 4</p>
//               <p className="mt-2 text-gray-500">
//                 Deskripsi singkat tentang Anggota Tim 4, minatnya dalam bidang kesehatan mental, dan bagaimana mereka berkontribusi pada tim.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import CardGrid from "@/components/CardGrid"

const About = () => {
  
return (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center text-gray-400">About Us</h2>
      <p className="mt-4 text-center font-semibold text-gray-800 max-w-2xl mx-auto">
        Kami adalah tim yang berdedikasi untuk membantu Anda menemukan keseimbangan mental dan emosional. Dengan pendekatan berbasis ilmu pengetahuan dan empati, kami hadir untuk mendukung kesehatan mental Anda.
      </p>

    <CardGrid />

  </div>
  </section>
      )

}

export default About 