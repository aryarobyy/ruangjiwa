'use client';
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/utils/twMerge";
import { Label } from "../ui/Label";

const InputImage = ({tempImg, title, handleAddFileChange, className, ...props}) => {
    const refAddFile = useRef(null);
    return (
      <div>
        <input
          accept="image/*"
          type="file"
          ref={refAddFile}
          className="hidden"
          onChange={handleAddFileChange}
        />
        <div
          onClick={() => refAddFile.current?.click()}
          className={cn(
            "p-20 transform h-56 rounded-lg object-cover brightness-90 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100 border-2 border-dashed border-gray-300 flex items-center justify-center w-full cursor-pointer", className
          )}
          {...props}
        >
          {tempImg ? (
            <Image
              className={cn(
                "w-full transform rounded-lg object-cover brightness-90 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
              )}
              src={tempImg}
              alt={`New ${title}`}
              fill
              unoptimized
            />
          ) : (
            <>
              <Label>{`Unggah ${title} Baru`}</Label>
            </>
          )}
        </div>
      </div>
    );
};

export default InputImage;