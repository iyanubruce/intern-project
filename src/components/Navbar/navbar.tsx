import React from "react";
import Link from "next/link";
import Image from "next/image";
import ConnectWallet from "../Button/connectWallet";
const navbar = () => {
  return (
    <div className="flex font-bold w-[89%] max-w-[1500px] mx-auto justify-between items-center pt-8 raleway">
      <Image
        src="/images/Logo.png"
        width={190}
        height={50}
        alt="logo"
        className="object-cover"
      />
      <div className="flex justify-between mx-auto min-w-max items-center h-max">
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
      <ConnectWallet />
    </div>
  );
};

export default navbar;
