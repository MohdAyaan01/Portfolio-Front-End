"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header:React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  type NavLink = {
    label:string,
    href: string
  }
  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Pricing", href: "/Pricing" },
    { label: "Contact", href: "/Contact" },
  ];

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-4">
      {/* ── Glassmorphic Pill Navbar ── */}
      <nav
        className="flex items-center justify-between w-full max-w-6xl
          border border-white/10 bg-black/60 backdrop-blur-xl
          px-6 py-3 rounded-full text-white text-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 shrink-0">
          <img src="MyLogo.jpeg" alt="Logo"  className="w-16 h-16" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-4 ml-8">
          
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <div className="nav-glow-wrapper">
                <Link
                  href={href}
                  className="relative z-10 flex items-center bg-gray-900 text-gray-300 hover:text-white rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 group"
                >
                  <span className="block transition-transform duration-300 group-hover:text-teal-300">
                    {label}
                  </span>
                </Link>
              </div>
            </li>
            
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3 ml-auto pl-8">
          <Link
            href="/SignUp"
            className="bg-teal-500 hover:bg-teal-400 shadow-[0px_0px_20px_6px_rgba(20,184,166,0.35)] hover:shadow-[0px_0px_28px_10px_rgba(20,184,166,0.5)] text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-full border border-white/20 hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <div
          className="absolute top-[76px] left-4 right-4 rounded-2xl
            bg-black/80 backdrop-blur-xl border border-white/10
            flex flex-col items-center gap-4 py-6 shadow-2xl md:hidden"
        >
          {navLinks.map(({ label, href }) => (
            <div key={label} className="nav-glow-wrapper">
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="relative z-10 flex items-center bg-gray-900 text-gray-300 hover:text-teal-300 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200"
              >
                {label}
              </Link>
            </div>
          ))}
          <div className="flex flex-col w-full items-center gap-3 mt-2 px-6">
            <Link
              href="#register"
              className="w-full text-center bg-teal-500 hover:bg-teal-400 shadow-[0px_0px_20px_6px_rgba(20,184,166,0.35)] text-white px-5 py-2 rounded-full text-sm font-semibold transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Header;
