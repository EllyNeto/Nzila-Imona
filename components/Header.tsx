"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, CircleCheck } from "lucide-react";
import PillButton from "@/components/PillButton";

export default function Header({ showNav = true }: { showNav?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/#solucao", label: "A Solução" },
    { href: "/#quem-somos", label: "Quem Somos" },
    { href: "/#equipa", label: "Equipa" },
    { href: "/#contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 24);

      if (y > lastScrollY.current && y > 120) {
        setIsHidden(true);
      } else if (y < lastScrollY.current) {
        setIsHidden(false);
      }
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) setIsHidden(false);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Announcement Bar */}
      {showNav && (
        <div
          className={`hidden overflow-hidden bg-lime-300 text-emerald-950 transition-[max-height,opacity] duration-300 ease-in-out sm:block ${
            isScrolled ? "max-h-0 opacity-0" : "max-h-9 opacity-100"
          }`}
        >
          <div className="container mx-auto flex h-9 items-center justify-between px-6 text-xs font-semibold lg:px-12">
            <span className="flex items-center gap-2">
              <CircleCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
              Rumo a Angola livre de minas até 2027
            </span>
            <a
              href="mailto:contacto@nzilaimona.ao"
              className="flex items-center gap-2 hover:underline"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={2.5} />
              contacto@nzilaimona.ao
            </a>
          </div>
        </div>
      )}

      <header
        className={`w-full border-b transition-all duration-300 ease-in-out ${
          isScrolled
            ? "border-white/0 bg-emerald-950/30 backdrop-blur-md"
            : "border-white/10 bg-emerald-950/95 backdrop-blur"
        }`}
      >
        <div
          className={`container mx-auto flex items-center gap-8 px-6 transition-all duration-300 ease-in-out lg:px-12 ${
            isScrolled ? "h-16" : "h-20"
          } ${showNav ? "justify-between" : "justify-start"}`}
        >
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/nzilaimona_logo.png"
              alt="Nzila Imona Logo"
              width={40}
              height={40}
              style={{ width: "auto" }}
              className={`brightness-0 invert transition-all duration-300 ${isScrolled ? "h-8" : "h-10"}`}
            />
            <span className={`text-xl font-bold tracking-tight text-white uppercase ${!showNav ? "hidden" : ""}`}>
              Nzila Imona
            </span>
          </Link>

          {/* Desktop Navigation */}
          {showNav && (
            <nav className="hidden items-center gap-8 text-sm font-semibold text-white md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-lime-300">
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {showNav && (
            <div className="flex items-center gap-4">
              <PillButton href="/login" variant="lime" className="hidden md:inline-flex">
                Entrar
              </PillButton>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 md:hidden"
                aria-label="Alternar menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav"
              >
                <div className="relative h-5 w-6">
                  <span
                    className={`absolute block h-0.5 w-full bg-white transition-all duration-300 ${
                      isMenuOpen ? "top-2 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute top-2 block h-0.5 w-full bg-white transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-full bg-white transition-all duration-300 ${
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
            id="mobile-nav"
            className={`fixed inset-0 z-40 bg-emerald-950 transition-all duration-300 ease-in-out md:hidden ${
              isScrolled ? "top-16" : "top-20"
            } ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <nav className="flex flex-col gap-6 p-6 text-lg font-bold text-white">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-white/10 pb-4 hover:text-lime-300"
                >
                  {link.label}
                </a>
              ))}
              <PillButton href="/login" variant="lime" className="mt-4 justify-center">
                Entrar
              </PillButton>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
