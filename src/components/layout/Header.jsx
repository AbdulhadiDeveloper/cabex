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

  // Define navigation items with the Submenu
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Airports", 
      href: "/airports", // Links to the main listing page
      hasDropdown: true,
      // Dynamic Links based on the slugs created in airports.js
      submenu: [
        { name: "Heathrow Airport Taxi", href: "/airports/heathrow-airport-taxi" },
        { name: "Gatwick Airport Taxi", href: "/airports/gatwick-airport-taxi" },
        { name: "Luton Airport Taxi", href: "/airports/luton-airport-taxi" },
        { name: "London City Airport Taxi", href: "/airports/london-city-airport-taxi" },
        { name: "Stansted Airport Taxi", href: "/airports/stansted-airport-taxi" },
        { name: "Manchester Airport Taxi", href: "/airports/manchester-airport-taxi" },
        { name: "Edinburgh Airport Taxi", href: "/airports/edinburgh-airport-taxi" },
        { name: "Glasgow Airport Taxi", href: "/airports/glasgow-airport-taxi" },
        { name: "Birmingham Airport Taxi", href: "/airports/birmingham-airport-taxi" },
        { name: "Liverpool Airport Taxi", href: "/airports/liverpool-airport-taxi" }
      ]
    },
    { 
      name: "Services", 
      href: "/services", 
      hasDropdown: true,
      submenu: [
        { name: "Airport Transfers", href: "/services/airportTransfers" }, // Points to Airport Listing
        { name: "Railway Transfers", href: "/services/railway-transfers" },
        { name: "Cruise Transfers", href: "/services/cruise-transfers" },
      ]
    },
    { name: "Cover Areas", href: "/coverAreas" },
    { name: "Special Offers", href: "/special-offers" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <nav className="relative z-50 flex justify-between items-center bg-[#1A1A1A] lg:bg-[#ffffff00]">
      {/* Logo */}
      <Link href="/">
        <div className="hidden lg:flex text-3xl font-bold tracking-tighter leading-none flex-col pb-2 pl-2">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="logo"
            className="object-contain"
          />
        </div>
        <div className="flex lg:hidden text-3xl font-bold tracking-tighter leading-none flex-col pb-2 pl-2">
          <Image
            src="/images/logo2.png"
            width={100}
            height={100}
            alt="logo"
            className="object-contain"
          />
        </div>
      </Link>

      {/* Glass Navbar */}
      <div className="hidden lg:flex bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 mt-3 text-sm text-gray-200 gap-4 shadow-2xl relative">
        {navItems.map((item) => {
          // Check if link is active
          const currentPath = pathname || "";
          // Active state logic: Exact match for Home, 'Starts With' for others
          const isActive = item.href === "/" 
            ? currentPath === "/" 
            : currentPath.startsWith(item.href);

          return (
            <div key={item.name} className="relative group">
              {/* Main Nav Link */}
              <Link
                href={item.href}
                className={`
                  flex items-center gap-1 px-6 py-2 rounded-full font-medium transition-all duration-300 relative z-10
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
                  <div className="bg-[#4d4d4d]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col py-2">
                    {item.submenu.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href}
                        className="px-6 py-3 text-gray-100 hover:bg-white/20 hover:text-white transition-colors text-[13px] font-medium block"
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

      {/* Login Button */}
      <div className="hidden lg:flex pr-4">

      <Link href="/login">
        <Button variant="primary">
          Log In
        </Button>
      </Link>
      </div>
      
    </nav>
  );
}