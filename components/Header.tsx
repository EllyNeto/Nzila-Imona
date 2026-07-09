"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ showNav = true }: { showNav?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#", label: "Quem Somos" },
    { href: "#", label: "O Que Fazemos" },
    { href: "#", label: "Onde Trabalhamos" },
    { href: "#", label: "Como Ajudar" },
    { href: "#", label: "Notícias" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur ${showNav ? "border-b border-zinc-100" : ""}`}>
      <div className={`container mx-auto flex h-20 items-center gap-12 px-6 lg:px-12 ${showNav ? "justify-between" : "justify-start"}`}>
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/nzilaimona_logo.png"
            alt="Nzila Imona Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className={`text-xl font-bold tracking-tight text-emerald-900 uppercase ${!showNav ? "hidden" : ""}`}>Nzila Imona</span>
        </Link>

        {/* Desktop Navigation */}
        {showNav && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-emerald-900">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-emerald-600 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {showNav && (
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="hidden md:block text-sm font-bold uppercase tracking-widest text-emerald-900 hover:text-emerald-600 transition-colors"
            >
              Entrar
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-100 md:hidden"
              aria-label="Toggle Menu"
            >
              <div className="relative h-5 w-6">
                <span
                  className={`absolute block h-0.5 w-full bg-emerald-900 transition-all duration-300 ${
                    isMenuOpen ? "top-2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute top-2 block h-0.5 w-full bg-emerald-900 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-full bg-emerald-900 transition-all duration-300 ${
                    isMenuOpen ? "top-2 -rotate-45" : "top-4"
                  }`}
                />
              </div>
            </button>
          </div>
        )}

      </div>

      {/* Mobile Navigation Overlay */}
      {showNav && (
        <div
          className={`fixed inset-0 top-20 z-40 bg-white transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col p-6 gap-6 text-lg font-bold uppercase tracking-widest text-emerald-900">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-zinc-50 pb-4 hover:text-emerald-600"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-emerald-700 py-4 text-center text-white hover:bg-emerald-800"
            >
              Entrar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
