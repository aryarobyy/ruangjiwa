import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 bg-[var(--hero-bg-color)] text-black">
      <h1 className="text-3xl font-bold text-center mb-8 text-[var(--title-color)]">Article Page</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl">
          <Link href="/">
            <Image
              alt="Furniture arrangement"
              src="/article1.jpg"
              className="h-48 w-full object-cover"
              width={320}
              height={180}
            />
          </Link>
          <div className="bg-[var(--hero-bg-color)] p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              15th Aug 2024
            </time>
            <Link href="">
              <h3 className="mt-2 text-lg font-semibold text-[var(--title-color)]">
                Mengatasi Rasa Khawatir dan Kecemasan
              </h3>
            </Link>
            <p className="mt-3 text-sm text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl">
          <Link href="/">
            <Image
              alt="Furniture arrangement"
              src="/article1.jpg"
              className="h-48 w-full object-cover"
              width={320}
              height={180}
            />
          </Link>
          <div className="bg-[var(--hero-bg-color)] p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              10th Oct 2022
            </time>
            <Link href="/">
              <h3 className="mt-2 text-lg font-semibold text-[var(--title-color)]">
                How to position your furniture for positivity
              </h3>
            </Link>
            <p className="mt-3 text-sm text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl">
          <Link href="/">
            <Image
              alt="Furniture arrangement"
              src="/article1.jpg"
              className="h-48 w-full object-cover"
              width={320}
              height={180}
            />
          </Link>
          <div className="bg-[var(--hero-bg-color)] p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              15th Aug 2024
            </time>
            <Link href="">
              <h3 className="mt-2 text-lg font-semibold text-[var(--title-color)]">
                Mengatasi Rasa Khawatir dan Kecemasan
              </h3>
            </Link>
            <p className="mt-3 text-sm text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>

      </div>
    </div>
  );
};

export default BlogCard;
