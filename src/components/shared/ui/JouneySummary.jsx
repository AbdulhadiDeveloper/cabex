import React from 'react'
import { 
  CalendarDays, 
  Plus, 
  ChevronDown,  
} from "lucide-react";
import Image from 'next/image';

function JouneySummary() {
  return (
    <div className="lg:col-span-5 flex flex-col">
        
        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-8">
            <div className="relative">
                <CalendarDays className="text-[#9C0E0F] w-10 h-10 lg:w-12 lg:h-12" strokeWidth={1.5} />
                <div className="absolute -right-1 -bottom-1 bg-[#9C0E0F] rounded-full p-0.5 border-2 border-white">
                    <Plus className="text-white w-3 h-3" />
                </div>
            </div>
            <div className="leading-[0.9]">
                <span className="block text-2xl lg:text-3xl font-black text-[#1a1a1a]">BOOK</span>
                <span className="block text-2xl lg:text-3xl font-black text-[#9C0E0F]">ONLINE</span>
            </div>
        </div>

        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-6">First Journey</h3>

        {/* SUMMARY TIMELINE */}
        <div className="relative flex flex-col gap-8 mb-8">
            {/* Vertical Line */}
            <div className="absolute right-[6px] top-3 bottom-3 w-[2px] bg-gray-300 rounded-full"></div>

            {/* Pick Up */}
            <div className="relative">
                <div className="border-b border-gray-400 pb-2 flex justify-between items-center pr-6">
                    <span className="text-sm text-gray-600">Pick Up : <span className="text-gray-400">Heathrow Airport, Terminal 2</span></span>
                    <span className="cursor-pointer text-gray-500 hover:text-black">✎</span>
                </div>
                <div className="absolute -right-[1px] top-0 w-4 h-4 bg-white border-[3px] border-[#bf1515] rounded-full z-10"></div>
            </div>

            {/* Via */}
            <div className="relative">
                <div className="border-b border-gray-400 pb-2 flex justify-between items-center pr-6">
                    <span className="text-sm text-gray-400">Via <span className="opacity-50">(Optional)</span></span>
                    <ChevronDown size={16} className="text-gray-400" />
                </div>
                <div className="absolute -right-[3px] top-4 w-5 h-5 bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white rounded-full flex items-center justify-center z-10 text-[12px]">
                    +
                </div>
            </div>

            {/* Drop Off */}
            <div className="relative">
                <div className="border-b border-gray-400 pb-2 flex justify-between items-center pr-6">
                    <span className="text-sm text-gray-600">Drop Off : <span className="text-gray-400">The University of Bath, BA2 7AY</span></span>
                    <span className="cursor-pointer text-gray-500 hover:text-black">✎</span>
                </div>
                <div className="absolute -right-[1px] top-6 w-4 h-4 bg-white border-[3px] border-[#bf1515] rounded-full z-10"></div>
            </div>
        </div>

        {/* MAP IMAGE */}
        <div className="w-full h-[220px] relative rounded-xl overflow-hidden border border-gray-200 shadow-inner">
            <Image 
                src="/images/airport-transfer/map.png"
                alt="Route Map"
                fill
                className="object-cover"
            />
        </div>

      </div>
  )
}

export default JouneySummary