"use client";

import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-16 min-h-full flex justify-around content-center border-2 border-x-0 bg-pal-dark sticky top-0 z-20">
      {/* Burger Logo */}
      <div className="flex items-center justify-center" onClick={toggleNavbar}>
        {!isOpen ? (
          <GiHamburgerMenu size={32} color="white" className="align-middle" />
        ) : (
          <IoCloseSharp size={32} color="white" className="align-middle" />
        )}
      </div>

      <Link
        className="[font-family:'Coda_Caption-ExtraBold',Helvetica] font-extrabold text-white text-[28px] content-center"
        href="/"
      >
        {" "}
        CARBÓN GURU
      </Link>

      <Link
        className="flex items-center justify-center"
        href="https://www.instagram.com/_carbonguru_/"
      >
        <FaInstagram size={28} color="white" className="align-middle" />
      </Link>
    </div>
  );
};
