import CardGrid from "@/components/CardGrid";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
    <Navbar />
      <section className="bg-[var(--hero-bg-color)] py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-[var(--title-color)]">
            About Us
          </h2>
          <p className="mt-4 text-center font-regular text-[var(--title-color)] max-w-2xl mx-auto">
            Kami adalah tim yang berdedikasi untuk membantu Anda menemukan
            keseimbangan mental dan emosional. Dengan pendekatan berbasis ilmu
            pengetahuan dan empati, kami hadir untuk mendukung kesehatan mental
            Anda.
          </p>

          <CardGrid />
        </div>
      </section>
    </>
  );
};

export default About;
