"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ConnectWallet from "../Button/connectWallet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex font-bold w-[89%] max-w-[1500px] mx-auto justify-between items-center pt-8 raleway">
      <Image
        src="/images/Logo.png"
        width={190}
        height={50}
        alt="logo"
        className="object-cover"
      />
      <button className="lg:hidden block" onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-align-justify"
        >
          <path d="M3 12h18" />
          <path d="M3 18h18" />
          <path d="M3 6h18" />
        </svg>
      </button>
      <div
        className={`lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex-col gap-10 fixed px-5 py-5 flex bg-blue-500 transition top-0 left-0 w-full h-max z-50`}
      >
        <Link href="/" className="mx-9 text-[#edd955]">
          Home
        </Link>
        <Link href="/" className="mx-9">
          About Us
        </Link>
        <Link href="/" className="mx-9">
          Roadmap
        </Link>
        <Link href="/" className="mx-9">
          FAQs
        </Link>
        <Link href="/" className="mx-9">
          Contact Us
        </Link>
        <ConnectWallet />
        <button
          className="absolute top-5 right-3"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <div className="lg:flex hidden justify-between mx-auto min-w-max items-center h-max">
        <Link href="/" className="mr-9 text-[#edd955]">
          Home
        </Link>
        <Link href="/" className="mx-9">
          About Us
        </Link>
        <Link href="/" className="mx-9">
          Roadmap
        </Link>
        <Link href="/" className="mx-9">
          FAQs
        </Link>
        <Link href="/" className="mx-9">
          Contact Us
        </Link>
      </div>
      <span className="lg:block hidden">
        <ConnectWallet />
      </span>
    </div>
  );
};

export default Navbar;
