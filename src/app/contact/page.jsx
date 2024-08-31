"use client"

import Navbar from "@/components/Navbar";
import { addContact } from "@/helpers/contact";
import { useState } from "react";
import useToast from "@/hooks/useHotToast";

const Page = () => {
  const { pushToast, updateToast } = useToast();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    const toastId = pushToast({
      message: "Membuat post...",
      isLoading: true,
    });

    try {
      const response = await addContact(contact);
      if (response.data.message !== "Success") {
        throw new Error(response.data.message);
      }
      updateToast({
        toastId,
        message: "Sukses ngirim pesan",
      });
      setContact({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      updateToast({
        toastId,
        message: error.message,
        isError: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-12 bg-[var(--hero-bg-color)]">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={sendEmail}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[var(--title-color)]"
              >
                Nama
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nama"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                className="w-full rounded-md border border-[#e0e0e0] bg-[var(--chat-bg)] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[var(--title-color)]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="w-full rounded-md border border-[#e0e0e0] bg-[var(--chat-bg)] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="judul"
                className="mb-3 block text-base font-medium text-[var(--title-color)]"
              >
                Judul
              </label>
              <input
                type="text"
                name="judul"
                id="subject"
                placeholder="Judul"
                value={contact.subject}
                onChange={(e) => setContact({ ...contact, subject: e.target.value })}
                className="w-full rounded-md border border-[#e0e0e0] bg-[var(--chat-bg)] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Pesan"
                className="mb-3 block text-base font-medium text-[var(--title-color)]"
              >
                Pesan
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Tulis Pesanmu"
                value={contact.message}
                onChange={(e) => setContact({ ...contact, message: e.target.value })}
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-[var(--chat-bg)] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
