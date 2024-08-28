"use client";
import React from "react";
import Link from "next/link";

const Modal = ({ isOpen, onClose, user, onClickOutside }) => {
  if (!isOpen) return null;

  return (
    <div
      id="modal-background"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75"
      onClick={onClickOutside}
    >
      <div
        className="relative bg-white p-4 rounded-md shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="space-y-2">
          <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md" onClick={onClose}>About</Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md" onClick={onClose}>Contact</Link>
          <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md" onClick={onClose}>Services</Link>
          <Link href="/article" className="block px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md" onClick={onClose}>Article</Link>
          <Link href="/journals" className="block px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md" onClick={onClose}>FAQ</Link>
          <Link href="/ruang-meditasi" className="block px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md" onClick={onClose}>Ruang Meditasi</Link>
          <Link href={`/aichat/${user ? user.username : "guest"}`} className="block px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md" onClick={onClose}>IMU ChatBot</Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
