"use client";
import { LuTrendingDown, LuTrendingUp } from "react-icons/lu";
import ReactApexChart from "react-apexcharts";
import Image from "next/image";
import Button from "../ui/Button";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";

const BlogCard = ({ itemImage, itemId, itemTitle }) => {

  return (
    <div className="rounded-md border border-default-200 bg-white p-2">
      <div className="p-2 relative">
        <div className="flex w-full justify-between absolute top-0 right-0 left-0">
            <Button className={""}>
                <Link href={itemId}>
                    <SquarePen size={15} />
                </Link>
            </Button>
            <Button.danger className={""}>
                <Trash2 size={15} />
            </Button.danger>

        </div>
          <div className="rounded-md">
            <Image src={itemImage} width={500} height={700} className="object-cover rounded-md h-44" alt={itemTitle} />
            {/* <img src={data.image} alt={data.title} /> */}
            <div className="w-full text-center">
              <Link href={"/artikel"}>
                <span className="w-full  text-sm text-default-600 font-semibold">
                  {itemTitle}
                </span>
              </Link>
            </div>
            {/* <span className={variant}>
              {variant === "text-teal-500" ? (
                <>
                  <LuTrendingUp className="me-1 inline size-4" /> +
                </>
              ) : (
                <>
                  <LuTrendingDown className="me-1 inline size-4" /> -
                </>
              )}
              {change}%
            </span> */}
          </div>
          {/* <div className="flex items-end justify-between gap-4">
            <h3 className="text-3xl font-medium text-default-800">{state}</h3>
            <ReactApexChart
              height={chartOptions.chart?.height}
              series={chartOptions.series}
              options={chartOptions}
              type={chartOptions.chart?.type}
              className="apex-charts"
            />
          </div> */}
        </div>
    </div>
  );
};

export default BlogCard;
