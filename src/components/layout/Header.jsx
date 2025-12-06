"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
// Import the custom Button component
import Button from "@/components/shared/ui/Button.jsx";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  // Define navigation items with the Submenu for Services
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Airports", 
      href: "/services", 
      hasDropdown: true,
      // Dropdown items based on your image
      submenu: [
        { name: "Heathrow Airport Taxi", href: "/airportTransfers" },
        { name: "Gatwick Airport Taxi", href: "/services/railway-transfers" },
        { name: "Luton Airport Taxi", href: "/services/cruise-transfers" },
        { name: "London City Airport Taxi", href: "/services/special-offers" },
        {name: "Stansted Airport Taxi Taxi" , href : ""},
        {name: "Manchester Airport Taxi" , href : ""},
        {name: "Edinburgh Airport Taxi", href : ""},
        {name: "Glasgow Airport Taxi", href: ""},
        {name: "Birmingham Airport Taxi" , href: ""},
        {name: "Liverpool Airport Taxi", href: ""}
      ]
    },
    { 
      name: "Services", 
      href: "/services", 
      hasDropdown: true,
      // Dropdown items based on your image
      submenu: [
        { name: "Airport Transfers", href: "/airportTransfers" },
        { name: "Railway Transfers", href: "/services/railway-transfers" },
        { name: "Cruise Transfers", href: "/services/cruise-transfers" },
      ]
    },
    { name: "Cover Areas", href: "/coverareas" },
    { name: "Special Offers", href: "/special-offers" },
    { name: "Contact", href: "/contact" },

  ];

  return (
    <nav className="relative z-50 flex justify-between items-center  ">
      {/* Logo */}
      <Link href="/">
      <div className="text-white text-3xl font-bold tracking-tighter leading-none flex flex-col pb-2 pl-2">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="logo"
          />
      </div>
      </Link>

      {/* Glass Navbar */}
      <div className="hidden lg:flex bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 mt-3 text-sm text-gray-200 gap-4 shadow-2xl relative">
        {navItems.map((item) => {
          // Check if link is active
          const currentPath = pathname || "";
          const isActive = item.href === "/" 
            ? currentPath === "/" 
            : currentPath.startsWith(item.href);

          return (
            <div key={item.name} className="relative group">
              {/* Main Nav Link */}
              <Link
                href={item.href}
                className={`
                  flex items-center gap-1  px-6 py-2 rounded-full font-medium transition-all duration-300 relative z-10
                  ${isActive 
                    ? "bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white shadow-md" 
                    : "hover:text-white text-gray-200 hover:bg-white/5"}
                `}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 group-hover:rotate-180 ${isActive ? "text-white" : "text-gray-400"}`} 
                  />
                )}
              </Link>

              {/* DROPDOWN MENU */}
              {item.hasDropdown && item.submenu && (
                <div className="absolute top-full left-0 pt-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  {/* The Glass Box */}
                  <div className="bg-[#4d4d4d]/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col py-2">
                    {item.submenu.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href}
                        className="px-6 py-3 text-gray-100 hover:bg-white/20 hover:text-white transition-colors text-[15px] font-medium"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Login Button (Using the reusable component) */}
      <Link href="/login">
      <Button 
        variant="primary" 
      >
        Log In
      </Button>
      </Link>
      
    </nav>
  );
}