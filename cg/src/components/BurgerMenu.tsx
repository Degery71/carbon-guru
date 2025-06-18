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
  // Links
  const links = ["Carta", "Donde Estamos", "Link3"];

  return (
    <div className="flex flex-col w-full">
      <div className="h-16 min-h-full flex justify-around content-center border-b-2 bg-pal-dark sticky top-0 z-20">
        {/* Burger Logo */}
        <div
          className="flex items-center justify-center"
          onClick={toggleNavbar}
        >
          {!isOpen ? (
            <GiHamburgerMenu size={32} color="white" className="align-middle" />
          ) : (
            <IoCloseSharp size={32} color="white" className="align-middle" />
          )}
        </div>

        <Link
          className=" font-extrabold text-white text-[28px] content-center"
          href="/"
        >
          {" "}
          CARBÓN GURÚ
        </Link>

        <Link
          className="flex items-center justify-center"
          href="https://www.instagram.com/_carbonguru_/"
        >
          <FaInstagram size={28} color="white" className="align-middle" />
        </Link>
      </div>
      {isOpen && (
        <div className="flex flex-col justify-center content-center text-center bg-pal-dark">
          {links.map((link: string) => (
            <Link
              key={link}
              className="font-extrabold text-white text-[28px] border-b-2 border-black"
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
