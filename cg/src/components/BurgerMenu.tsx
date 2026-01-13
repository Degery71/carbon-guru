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
  const links = ["Carta", "Donde Estamos"];

  return (
    <div className="flex flex-col w-full">
      <div className="h-16 min-h-full flex justify-around content-center border-b-2 border-yellow-400 bg-pal-dark sticky top-0 z-20 shadow-lg">
        {/* Burger Menu Icon */}
        <button
          className="flex items-center justify-center hover:opacity-75 active:scale-95 transition-all duration-500 cursor-pointer"
          onClick={toggleNavbar}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {!isOpen ? (
            <GiHamburgerMenu
              size={32}
              color="white"
              className="align-middle transition-transform duration-500"
            />
          ) : (
            <IoCloseSharp
              size={32}
              color="white"
              className="align-middle transition-transform duration-500 rotate-90"
            />
          )}
        </button>

        {/* Logo */}
        <Link
          className="font-extrabold text-white text-[28px] content-center hover:text-yellow-300 transition-all duration-500 hover:scale-105 transform"
          href="/"
        >
          CARBÓN GURÚ
        </Link>

        {/* Instagram Link */}
        <Link
          className="flex items-center justify-center hover:opacity-75 hover:scale-110 transition-all duration-500 active:scale-95"
          href="https://www.instagram.com/_carbonguru_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram"
        >
          <FaInstagram size={28} color="white" className="align-middle" />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex flex-col justify-center content-center text-center bg-pal-dark overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {links.map((link: string, index: number) => (
          <Link
            key={link}
            className={`font-extrabold text-white text-[28px] border-b-2 border-yellow-400 py-4 hover:bg-yellow-400/10 hover:text-yellow-300 transition-all duration-500 transform ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
            }}
            href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => setIsOpen(false)}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};
