"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react"; // Hook
import { Menu, X, ChevronDown } from "lucide-react"; // Icons
// Import the custom Button component
import Button from "@/components/shared/ui/Button.jsx";
import Image from "next/image";

export default function Header() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null); // To toggle accordions

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
        { name: "Airport Transfers", href: "/services/airport-transfers" }, // Points to Airport Listing
        { name: "Railway Transfers", href: "/services/railway-transfers" },
        { name: "Cruise Transfers", href: "/services/cruise-transfers" },
      ]
    },
    { name: "Cover Areas", href: "/coverAreas" },
    { name: "Special Offers", href: "/special-offers" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <>
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
      <div className="hidden lg:flex pr-2">

      <Link href="/login">
        <Button variant="primary">
          Log In
        </Button>
      </Link>
      </div>

      {/* --- MOBILE HAMBURGER BUTTON (VISIBLE ONLY ON MOBILE) --- */}
<button 
  onClick={() => setIsMobileMenuOpen(true)}
  className="lg:hidden text-white bg-white/10 p-2.5 rounded-full border border-white/20 hover:bg-[#9C0E0F] transition-all shadow-md"
  aria-label="Open Menu"
>
  <Menu size={24} />
</button>
      
    </nav>
    {/* --- MOBILE MENU DRAWER --- */}
{/* 1. Backdrop Overlay */}
<div 
  className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
  onClick={() => setIsMobileMenuOpen(false)} // Click outside to close
></div>

{/* 2. Side Panel */}
<div 
  className={`fixed top-0 right-0 z-[101] w-[85%] max-w-[320px] h-full bg-[#1A1A1A] border-l border-[#360505] shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] lg:hidden ${
    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  
  {/* Header: Title + Close Button */}
  <div className="flex items-center justify-between p-6 border-b border-white/10">
    <span className="text-xl font-bold text-white tracking-tight">
        Menu
    </span>
    <button 
      onClick={() => setIsMobileMenuOpen(false)}
      className="text-gray-400 hover:text-[#9C0E0F] hover:bg-white/10 p-2 rounded-full transition-all"
    >
      <X size={24} />
    </button>
  </div>

  {/* Scrollable Links Area */}
  <div className="flex-1 overflow-y-auto py-4 px-4 space-y-2">
    
    {navItems.map((item, index) => {
        const isSubmenuOpen = mobileSubmenuOpen === index;
        const hasSubmenu = item.hasDropdown && item.submenu;

        return (
            <div key={item.name} className="border-b border-white/5 last:border-0 pb-1">
                
                {/* Main Link / Trigger */}
                <div className="flex items-center justify-between">
                    <Link 
                        href={item.href}
                        onClick={() => !hasSubmenu && setIsMobileMenuOpen(false)}
                        className="flex-1 py-3 text-[15px] font-medium text-gray-200 hover:text-[#9C0E0F] transition-colors"
                    >
                        {item.name}
                    </Link>
                    
                    {/* Expand Icon for Submenu */}
                    {hasSubmenu && (
                        <button 
                            onClick={() => setMobileSubmenuOpen(isSubmenuOpen ? null : index)}
                            className={`p-3 text-gray-400 transition-transform duration-300 ${isSubmenuOpen ? "rotate-180 text-[#9C0E0F]" : ""}`}
                        >
                            <ChevronDown size={18} />
                        </button>
                    )}
                </div>

                {/* Submenu Accordion */}
                <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#111] rounded-lg ${isSubmenuOpen ? "max-h-[500px] mt-1 mb-2" : "max-h-0"}`}
                >
                    {item.submenu?.map((subItem, idx) => (
                        <Link 
                            key={idx}
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-white border-b border-white/5 last:border-0 hover:bg-[#9C0E0F]/10 transition-colors"
                        >
                            <div className="w-1.5 h-1.5 bg-[#9C0E0F] rounded-full shrink-0"></div>
                            {subItem.name}
                        </Link>
                    ))}
                </div>

            </div>
        );
    })}

  </div>

  {/* Footer: Action Button */}
  <div className="p-6 border-t border-white/10 bg-black/20">
    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
        <button className="w-full py-4 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold text-xs tracking-widest shadow-xl">
            LOG IN
        </button>
    </Link>
  </div>

</div>
    </>
  );
}