"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
// Import the custom Button component
import Button from "../shared/ui/Button";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  // Define navigation items with the Submenu for Services
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Services", 
      href: "/services", 
      hasDropdown: true,
      // Dropdown items based on your image
      submenu: [
        { name: "Airport Transfers", href: "/services/airport-transfers" },
        { name: "Railway Transfers", href: "/services/railway-transfers" },
        { name: "Cruise Transfers", href: "/services/cruise-transfers" },
        { name: "Special Offers", href: "/services/special-offers" },
        { name: "Cover Area", href: "/services/cover-area" },
      ]
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Help", href: "/help" },
  ];

  return (
    <nav className="relative z-50 flex justify-between items-center px-10 py-8">
      {/* Logo */}
      <div className="text-white text-3xl font-bold tracking-tighter leading-none flex flex-col pl-4">
        <Image
          src="/images/logo.png"
          width={150}
          height={150}
          />
      </div>

      {/* Glass Navbar */}
      <div className="hidden lg:flex bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 text-sm text-gray-200 gap-4 shadow-2xl relative">
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
      <Button 
        variant="primary" 
        onClick={() => console.log("Login Clicked")}
      >
        Log In
      </Button>
      
    </nav>
  );
}