import FaqBox from "@/components/FaqBox";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-[var(--hero-bg-color)] py-5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-[var(--title-color)]">
            FAQ
          </h2>
          <p className="mb-12 text-center font-regular text-[var(--title-color)] max-w-2xl mx-auto">
          Frequently Asked Questions
          </p>

          <FaqBox />
        </div>
      </section>
    </>
  );
};

export default page;
