"use client";

import React from "react";
import { Car, Info, Users } from "lucide-react";

export default function FleetTableSection({ fleetData }) {
  if (!fleetData || fleetData.length === 0) return null;

  return (
    <section className="bg-[#EBEBEB] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
                Comprehensive <span className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">Fleet Services</span>
            </h2>
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed font-medium">
                We understand the importance of seamless travel. From solo adventurers to larger groups, we provide a wide range of luxury vehicles to suit your requirements.
            </p>
        </div>

        {/* ====================================================
            MOBILE VIEW: CARD LAYOUT (Visible < 768px)
           ==================================================== */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
            {fleetData.map((item, index) => (
                <div key={index} className="bg-white rounded-[20px] shadow-lg overflow-hidden border border-gray-100">
                    
                    {/* Mobile Card Header */}
                    <div className="bg-[#1A1A1A] px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                            <Car size={16} className="text-[#9C0E0F]" />
                        </div>
                        <h3 className="text-white font-bold text-base tracking-wide">
                            {item.type}
                        </h3>
                    </div>

                    {/* Mobile Card Content */}
                    <div className="p-6 flex flex-col gap-4">
                        
                        {/* Description */}
                        <div>
                            <span className="text-[10px] uppercase font-bold text-gray-400 mb-1 block tracking-wider">Description</span>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-[1px] w-full bg-gray-100"></div>

                        {/* Ideal For */}
                        <div>
                            <span className="text-[10px] uppercase font-bold text-gray-400 mb-2 block tracking-wider">Ideal For</span>
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-[#9C0E0F]" />
                                <span className="text-sm font-bold text-[#1A1A1A]">{item.ideal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* ====================================================
            DESKTOP VIEW: TABLE LAYOUT (Visible >= 768px)
           ==================================================== */}
        <div className="hidden md:block bg-white rounded-[30px] shadow-xl overflow-hidden border border-gray-100 relative">
            
            <table className="w-full text-left border-collapse">
                
                {/* Table Head */}
                <thead>
                    <tr className="bg-[#1A1A1A] text-white border-b border-[#360505]">
                        <th className="py-5 px-8 text-xs font-bold uppercase tracking-widest w-[25%]">
                            <div className="flex items-center gap-2">
                                <Car size={16} className="text-[#9C0E0F]" />
                                Vehicle Type
                            </div>
                        </th>
                        <th className="py-5 px-8 text-xs font-bold uppercase tracking-widest w-[45%]">
                            <div className="flex items-center gap-2">
                                <Info size={16} className="text-[#9C0E0F]" />
                                Description
                            </div>
                        </th>
                        <th className="py-5 px-8 text-xs font-bold uppercase tracking-widest w-[30%]">
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-[#9C0E0F]" />
                                Ideal For
                            </div>
                        </th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-100">
                    {fleetData.map((item, index) => (
                        <tr 
                            key={index} 
                            className="group hover:bg-[#9C0E0F]/5 transition-colors duration-200"
                        >
                            {/* Vehicle Name */}
                            <td className="py-5 px-8 align-top">
                                <span className="text-[15px] font-bold text-[#1A1A1A] group-hover:text-[#9C0E0F] transition-colors">
                                    {item.type}
                                </span>
                            </td>

                            {/* Description */}
                            <td className="py-5 px-8 align-top">
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </td>

                            {/* Ideal For */}
                            <td className="py-5 px-8 align-top">
                                <div className="inline-block bg-[#E8E8E8] text-gray-700 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                                    {item.ideal}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

      </div>
    </section>
  );
}