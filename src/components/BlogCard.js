import { dateConvert } from "@/utils/dateConvert";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({data}) => {
  return (
    <>
      <article className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl">
        <Link href={`article/${data?.artikelId}`}>
          <Image
            alt="Furniture arrangement"
            src={data?.imgUrl ? data.imgUrl : ""}
            className="h-48 w-full object-cover"
            width={320}
            height={180}
          />
          <div className="bg-[var(--hero-bg-color)] p-4 sm:p-6">
            <div className="flex w-full items-center justify-between">
              <p className="block text-xs text-gray-500">
                {dateConvert(data?.date)}
              </p>
              <p className="text-xs text-gray-500">{data?.name}</p>
            </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--title-color)]">
                {data?.title}
              </h3>
            <p className="mt-3 text-sm text-gray-500 line-clamp-3">
              {`${data?.description?.slice(0, 300)}...`}
            </p>
          </div>
        </Link>
      </article>
    </>
  );
};

export default BlogCard;
