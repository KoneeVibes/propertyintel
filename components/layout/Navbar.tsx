"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "../ui/Button";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  { label: "Why PropertyIntel", href: "#whyPropertyIntel" },
  { label: "How it works", href: "#howItWorks" },
  { label: "Legal consultancy", href: "#legalConsultancy" },
  { label: "Contact Us", href: "/contact" },
  { label: "Track a search", href: "#trackSearch" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="relative top-0 z-40 border-b border-border  py-3 px-5 sm:px-8 lg:px-22">
      <div className="flex items-center justify-between lg:justify-start lg:gap-30">
        <div className="shrink-0">
          <Image src={logo} alt="Property intel logo" />
        </div>
        <div className="hidden lg:flex items-center gap-30">
          <nav className="flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="link-underline text-[#0E100F] font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button className="hidden lg:inline-flex bg-secondary hover:bg-[#1c0fa8]">Start a Search</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="cursor-pointer p-2 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-[80%] max-w-sm flex-col bg-white px-6 py-5 shadow-xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image src={logo} alt="Property intel logo" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="cursor-pointer p-2"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-[#BECAD8] py-4 font-medium text-[#0E100F]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="mt-auto w-full bg-secondary hover:bg-[#1c0fa8]" onClick={() => setOpen(false)}>
          Start a Search
        </Button>
      </aside>
    </header>
  );
}
