"use client";

import { useTheme } from "@/context/useTheme";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // scrolling down
        setScrolled(false); // hide
      } else if (window.scrollY < lastScrollY) {
        // scrolling up
        setScrolled(true); // show
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
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

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
          <Link href="/" className="text-xl font-bold text-primary">
            Devfolio&trade;
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

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
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 px-3 rounded-md font-medium hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-colors ${
                    isActive ? "text-primary" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
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
