"use client";

import React from "react";

export default function AirportContentSection({ content }) {
  // Guard Clause
  if (!content || content.length === 0) return null;

  return (
    <section className=" py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1000px] mx-auto bg-white rounded-[30px] p-8 lg:p-16 shadow-xl">
        
        {content.map((block, index) => {
          
          // 1. MAIN HEADING (Theme: Dark Black)
          if (block.type === "main-heading") {
            return (
              <div key={index} className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] tracking-tight leading-tight mb-4">
                  {block.text}
                </h2>
                {/* Decorative Red Line */}
                <div className="w-24 h-1 bg-[#9C0E0F] mx-auto rounded-full"></div>
              </div>
            );
          }

          // 2. SUB HEADING (Theme: Brand Red)
          if (block.type === "sub-heading") {
            return (
              <h3 key={index} className="text-xl lg:text-2xl font-bold text-[#9C0E0F] mt-12 mb-6 tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#1A1A1A] rounded-full inline-block"></span>
                {block.text}
              </h3>
            );
          }

          // 3. PARAGRAPH (Theme: Clean Grey Text)
          if (block.type === "paragraph") {
            return (
              <p key={index} className="text-gray-500 text-sm lg:text-[15px] leading-7 mb-6 font-medium text-justify lg:text-left">
                {block.text}
              </p>
            );
          }

          // 4. LIST (Theme: Red Bullets)
          if (block.type === "list") {
            return (
              <ul key={index} className="list-disc pl-5 space-y-4 mb-8 marker:text-[#9C0E0F] marker:text-lg">
                {block.items.map((item, i) => {
                  
                  // Split "Title: Description" logic
                  const parts = item.split(":");
                  const hasTitle = parts.length > 1;
                  
                  return (
                    <li key={i} className="text-gray-500 text-sm lg:text-[15px] leading-7 pl-2">
                        {hasTitle ? (
                            <>
                                {/* Bold Part in Black */}
                                <span className="font-bold text-[#1A1A1A]">{parts[0]}:</span>
                                {/* Rest of text */}
                                {parts.slice(1).join(":")}
                            </>
                        ) : (
                            item
                        )}
                    </li>
                  );
                })}
              </ul>
            );
          }

          return null;
        })}

      </div>
    </section>
  );
}