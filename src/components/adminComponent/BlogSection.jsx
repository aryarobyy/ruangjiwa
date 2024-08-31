import Link from "next/link";
import BlogCard from "@/components/adminComponent/BlogCard";
import Button from "../ui/Button";
import LoadingSection from "../system/LoadingSection";


const BlogSection = ({ title, type, data, isGettingData, onDeletedItem, href }) => {
  return (
    <div className="rounded-md border border-default-200 bg-white dark:bg-default-50 w-full text-dark">
      <div className="border-b border-default-200 px-6 py-3 text-center">
        <h4 className="text-lg text-dark">{title}</h4>
      </div>
      <div
        className={`h-[500px] scroll-smooth p-2 overflow-y-auto  ${
          !data || data?.length < 1
            ? ""
            : "grid sm:grid-cols-2 md:grid-cols-3 gap-2"
        }`}
      >
          {isGettingData && (!data || data.length <= 1) ? (
            <div className="w-full h-full flex items-center justify-center">
              <LoadingSection />
            </div>
          ) : !data || data?.length < 1 ? (
            <div className="w-full h-full flex flex-col gap-3 justify-center items-center text-center">
              <h1>Sepertinya belum terdapat artikel</h1>
              <Button>
                <Link href={href}>Buat Artikel Baru</Link>
              </Button>
            </div>
          ) : (
            data?.map((item, idx) => {
              return (
                <BlogCard
                  key={idx}
                  data={item}
                  handleDeletedItem={onDeletedItem}
                  itemDescription={
                    type === "dashboard"
                      ? `${item?.description?.slice(0, 200)}...`
                      : `${item?.description?.slice(0, 500)}...`
                  }
                />
              );
            })
          )}
      </div>
    </div>
  );
};

export default BlogSection;
