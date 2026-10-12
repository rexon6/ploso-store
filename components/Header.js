"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsAppButton from "./WhatsAppButton";
import { storeConfig } from "@/data/products";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/katalog", label: "Katalog" },
  { href: "/kontak", label: "Kontak" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu mobile ketika navigasi berpindah rute
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    if (nextState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "header-scrolled" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-lg md:text-xl tracking-[0.2em] text-brand-forest focus:outline-none focus:ring-1 focus:ring-brand-olive rounded"
          >
            {storeConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-wider font-sans font-medium transition-colors pb-1 ${
                    active
                      ? "text-brand-forest border-b border-brand-olive"
                      : "text-brand-ink hover:text-brand-olive"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 focus:outline-none focus:ring-1 focus:ring-brand-olive rounded"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-brand-ink transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-ink transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 bg-brand-ink transition-all duration-300 ${
                mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-cream flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav
          aria-label="Navigasi Mobile"
          className="flex flex-col items-center gap-8"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-3xl transition-colors ${
                  active
                    ? "text-brand-forest font-semibold"
                    : "text-brand-ink hover:text-brand-olive"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-12">
          <WhatsAppButton
            size="lg"
            text="Halo Ploso Store"
            className="shadow-sm"
          >
            Hubungi WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </>
  );
}
