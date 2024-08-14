import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[var(--hero-bg-color)] sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-[var(--hero-title-color)] md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p className="hidden text-[var(--text-color)] md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="/register"
              className="inline-block rounded bg-[var(--button-bg-color)] px-12 py-3 text-sm font-medium text-[var(--button-text-color)] transition hover:bg-[var(--button-hover-bg-color)] focus:outline-none focus:ring focus:ring-[var(--button-focus-ring-color)]"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/landingPage.jpg"
        alt="Photos"
        className="rounded-lg"
        width={500}
        height={300}
        layout="responsive "
        quality={100}
        priority
      />
    </section>
  );
};

export default Hero;
