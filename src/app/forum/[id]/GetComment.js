"use client";

import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Label } from "@/components/ui/Label";
import { dateConvert } from "@/utils/dateConvert";

const GetComment = ({ lastReply, comments }) => {
  return (
    <>
      {
        !comments || comments.length < 1 ? (
          <div className="w-full h-full flex items-center justify-center text-center px-4">
            <Label className="text-[var(--title-color)]">
              Sepertinya belum terdapat komentar, yuk mulai komentar pada temanmu!
            </Label>
          </div>
        ) : 
          comments?.map((comment, index) => (
            <div key={comment?.commentId || index} className="flex border border-[var(--border-color)] gap-4 p-2 rounded-md w-full hover:shadow-md text-[var(--title-color)]">
              <Image
                src={comment?.profilePic || "/avatar.jpg"}
                alt={`${comment?.createdBy}'s profile`}
                width={50}
                height={50}
                className="rounded-full w-12 h-12"
              />
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm font-bold">{comment?.name}</span>
                </div>
                <div className="w-full justify-between items-center flex">
                  <p>{comment?.comment}</p>
                  <p className="text-xs">{dateConvert(comment.date)}</p>
                </div>
              </div>
            </div>
          ))
      }
      {!lastReply && <hr className="border-t my-2" />}
    </>
  );
};

GetComment.propTypes = {
  forumId: PropTypes.string.isRequired,
  lastReply: PropTypes.bool,
};

export default GetComment;
