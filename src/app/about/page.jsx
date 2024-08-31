import CardGrid from "@/components/CardGrid";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[var(--hero-bg-color)] py-12">
        <div className="container mx-auto px-6 s">
          <h2 className="text-3xl font-semibold text-center text-[var(--title-color)]">
            About Us
          </h2>
          <p className="mt-4 text-center font-regular text-[var(--title-color)] max-w-2xl mx-auto">
            RuangJiwa adalah platform yang didedikasikan untuk membantu individu
            dalam menjaga kesehatan mental mereka. Kami memahami bahwa di era
            digital ini, tantangan hidup semakin kompleks, dan kesehatan mental
            sering kali terabaikan. Tujuan kami adalah menyediakan ruang yang
            aman dan nyaman bagi setiap orang untuk menemukan dukungan, berbagi
            pengalaman, dan belajar cara mengelola stres serta emosi dengan
            lebih baik.
          </p>

          <CardGrid />
        </div>
      </section>
    </>
  );
};

export default About;
