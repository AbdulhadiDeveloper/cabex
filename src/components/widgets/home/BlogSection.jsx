import React from "react";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    date: "November 2024",
    title: "Exploring the City: Top Destinations Near Major Airport",
    description: "Got Extra Time Before Your Flight? Check Out These Top Spots Near Major Airports Around The World For A Quick City Adventure Before Heading To The Terminal.",
    // Ensure these paths are correct in your public folder
    image: "/images/blogImage.jpg" 
  },
  {
    id: 2,
    title: "Exploring the City: Top Destinations Near Major Airport",
    date: "November 2024",
    description: "Got Extra Time Before Your Flight? Check Out These Top Spots Near Major Airports Around The World For A Quick City Adventure Before Heading To The Terminal.",
    image: "/images/blogImage.jpg"
  },
  {
    id: 3,
    title: "Exploring the City: Top Destinations Near Major Airport",
    date: "November 2024",
    description: "Got Extra Time Before Your Flight? Check Out These Top Spots Near Major Airports Around The World For A Quick City Adventure Before Heading To The Terminal.",
    image: "/images/blogImage.jpg"
  }
];

export default function BlogSection() {
  return (
    <section className="bg-[#EBEBEB] py-24 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* =================================================================
            1. HIDDEN SVG DEFINITION (Responsive Clip Path)
            This allows us to clip standard HTML/NextJS elements.
            Coordinates are 0 to 1 (Percentages).
           ================================================================= */}
        <svg className="absolute w-0 h-0">
          <defs>
            <clipPath id="blog-card-clip" clipPathUnits="objectBoundingBox">
              {/* 
                 Mapping the shape to relative coordinates (0-1):
                 - Top Left Cut: Start at 0,0.25 -> Line to 0.32,0.25 -> Curve Up
                 - Bottom Right Cut: Line down right side -> Curve in to 0.55,0.8
              */}
              <path d="M 0,0.25 L 0.32,0.25 Q 0.4,0.25 0.4,0.15 L 0.4,0.1 Q 0.4,0 0.47,0 L 0.93,0 Q 1,0 1,0.1 L 1,0.7 Q 1,0.81 0.92,0.81 L 0.62,0.81 Q 0.55,0.81 0.55,0.92 L 0.55,1 L 0.08,1 Q 0,1 0,0.9 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* 2. HEADER */}
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-4xl lg:text-[4rem] font-bold text-[#1A1A1A] tracking-tight leading-none">
            Stay Informed With <span className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">Our Blog</span>
          </h2>
        </div>

        {/* 3. BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogs.map((blog, index) => (
                <div key={index} className="flex flex-col items-center group">
                    
                    {/* A. CARD CONTAINER (Relative Parent) */}
                    <div className="relative w-full aspect-[400/230] transition-transform duration-300 group-hover:-translate-y-1 drop-shadow-xl filter">
                        
                        {/* 1. DATE BADGE (Absolute on top of the image) */}
                        <div className="absolute top-[12%] left-0 w-[40%] h-[12%] flex items-center justify-center gap-2 z-20 pr-4 ">
                            <div className="h-[1.5px] w-6 bg-[#900c0c]"></div>
                            <span className="text-[10px] font-bold text-[#b55858] italic tracking-wide font-serif whitespace-nowrap">
                                {blog.date}
                            </span>
                            <div className="h-[1.5px] w-6 bg-[#900c0c]"></div>
                        </div>

                        {/* 2. IMAGE WRAPPER (Clipped) */}
                        <div 
                            className="relative w-full h-full bg-[#1a1a1a]"
                            style={{ clipPath: "url(#blog-card-clip)" }}
                        >
                            {/* Next.js Image Component */}
                            <Image 
                                src={blog.image} 
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        </div>

                        {/* 3. READ MORE BUTTON (Fills the Bottom-Right Void) */}
                        <div className="absolute bottom-0 right-0 w-[45%] h-[17%] z-30">
                            <button className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white shadow-lg hover:shadow-red-900/40 border border-transparent w-full h-full  text-[11px] font-md uppercase tracking-widest  transition-colors flex items-center justify-center rounded-full ml-2 mt-1">
                                Read More
                            </button>
                        </div>

                    </div>

                    {/* B. TEXT CONTENT */}
                    <div className="mt-6 text-center px-4">
                        <h3 className="text-[1.1rem] font-bold text-[#1A1A1A] mb-3 leading-snug min-h-[56px] flex items-center justify-center">
                            {blog.title}
                        </h3>
                        <p className="text-gray-500 text-[11px] font-medium leading-relaxed max-w-xs mx-auto">
                            {blog.description}
                        </p>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </section>
  );
}