"use client";

import { useTheme } from "@/context/useTheme";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Scroll show/hide navbar
  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setScrolled(false); // hide navbar on scroll down
      } else if (window.scrollY < lastScrollY) {
        setScrolled(true); // show on scroll up
      } else if (window.scrollY <= 50) {
        setScrolled(true); // top of page
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Smooth scroll function
  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-1/2 transform -translate-x-1/2 z-50 
        rounded-xl transition-all duration-700 ease-in-out
        backdrop-blur-md bg-white/60 dark:bg-gray-900/60
        ${scrolled ? "shadow-2xl animate-slideDown" : ""}`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="text-xl font-bold text-primary cursor-pointer"
          >
            Devfolio&trade;
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="hover:text-primary transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300
                 hover:bg-gray-100/30 dark:hover:bg-gray-800/30
                 text-gray-800 dark:text-white"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-colors text-primary"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-11/12
          rounded-xl bg-white/70 dark:bg-gray-900/70 shadow-2xl animate-slideDown"
        >
          <div className="flex flex-col p-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="block py-2 px-3 rounded-md font-medium hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-100/30 dark:hover:bg-gray-800/30 text-gray-800 dark:text-white"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
