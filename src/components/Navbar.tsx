"use client";

import { useState } from "react";
import Link from "next/link";

import { LuMenu, LuX } from "react-icons/lu";

interface NavbarProps {
  scrolled: boolean;
  navRef: React.RefObject<HTMLElement | null>;
}

export default function Navbar({ scrolled, navRef }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full flex z-100 ${
        scrolled ? "text-white" : "text-black"
      }`}
    >
      <div
        className={`w-full px-5 md:px-10 py-4 ${
          isOpen ? "hidden" : "flex items-center justify-between"
        }`}
      >
        {/* Brand / Logo */}
        <Link href="/" className="font-extrabold text-base">
          LAKSHYA RANA
        </Link>

        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li>
            <Link href="#about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <LuMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen px-6 py-4 flex flex-col justify-center items-center space-y-4 bg-white">
          {/* Close button */}
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            <LuX size={32} />
          </button>

          <Link
            href="#about"
            className="text-4xl block hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-4xl block hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-4xl block hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
