"use client";

import React from "react";

/**
 * Reusable Button Component
 * @param {string} variant - 'primary' (Gradient) or 'outline' (White/Border)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Button text or content
 * @param {object} props - Any other button attributes (onClick, type, etc.)
 */
const Button = ({ variant = "primary", className = "", children, ...props }) => {
  
  // 1. Base styles shared by both buttons (Shape, Font, Animation)
  const baseStyles = 
    "rounded-full font-bold text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center";

  // 2. Specific styles for each variant
  const variants = {
    primary: 
      "bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white shadow-lg hover:shadow-red-900/40 border border-transparent",
    outline: 
      "bg-white border border-[#360505] text-[#750a0a] hover:bg-gray-50 shadow-sm hover:shadow-md"
  };

  // 3. Combine classes
  const appliedClass = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button className={appliedClass} {...props}>
      {children}
    </button>
  );
};

export default Button;