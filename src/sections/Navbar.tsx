"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-20 top-0 left-0 border-b transition-all duration-300",
          scrolled
            ? "bg-white shadow-md border-gray-200"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />

          <div className="flex md:order-2 space-x-3">
            <Button className="rounded-full h-10 sm:h-12 w-full sm:w-auto sm:px-8 md:px-12 md:w-45 border border-transparent bg-[#2E68FD] font-semibold text-sm sm:text-base cursor-pointer hover:bg-transparent hover:border-[#2E68FD] hover:text-[#2E68FD]">
              Get Started
            </Button>

            {/* mobile menu */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Menu items */}
          <div
            className={cn(
              "w-full md:flex md:w-auto md:order-1 transition-all duration-300",
              mobileOpen ? "block" : "hidden"
            )}
          >
            <ul className="flex flex-col gap-5 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={cn(
                      "block py-2 px-3 rounded-sm md:p-0",
                      item.label === "Home"
                        ? "text-white bg-blue-700 md:text-blue-700 md:bg-transparent"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
