"use client";

import React from "react";
import Link from "next/link";
import { megaMenuData } from "@/data/megaMenuData"; // Import Data

export default function MegaLinksSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 px-4 md:px-8 font-sans border-t border-gray-200 pb-40">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-8 uppercase tracking-widest border-b border-[#9C0E0F] w-fit pb-2">
            Popular Connections
        </h3>

        {/* The Grid - Responsive 2/3/4/5 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
            
            {megaMenuData.map((section, index) => (
                <div key={index}>
                    {/* Category Title */}
                    <h4 className="text-sm font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9C0E0F]"></span>
                        {section.category}
                    </h4>

                    {/* Links List */}
                    <ul className="space-y-2">
                        {section.links.map((link, i) => (
                            <li key={i}>
                                <Link 
                                    href={link.url}
                                    className="text-[11px] lg:text-[12px] text-gray-800 font-medium hover:text-[#9C0E0F] hover:underline underline-offset-4 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className=" text-gray-800">
                Coverage across the UK. All airports, seaports, and major stations included.
            </p>
        </div>

      </div>
    </section>
  );
}