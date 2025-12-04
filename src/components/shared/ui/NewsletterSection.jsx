import React from "react";

export default function NewsletterSection() {
  return (
    // relative z-20 ensures it sits ON TOP of the footer
    // -mb-24 creates the overlap effect (pulls the footer up by 6rem)
    <section className="relative z-20 px-4 md:px-8 font-sans -mb-[120px] pointer-events-none">
      <div className="max-w-[1100px] mx-auto pointer-events-auto">
        
        {/* RED CONTAINER */}
        <div className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] rounded-[40px] px-6 py-12 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl gap-8 lg:gap-0">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="flex flex-col text-center lg:text-left max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Our Newsletters
            </h2>
            <p className="text-gray-200 text-sm lg:text-base font-light leading-relaxed opacity-90">
              Subscribe to stay updated on the latest 3D design trends, exclusive content, and special offers!
            </p>
          </div>

          {/* RIGHT: INPUT FORM */}
          <div className="w-full max-w-md">
            <form className="relative w-full flex items-center">
              
              {/* Input Field */}
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className="w-full h-14 lg:h-16 pl-8 pr-32 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-900/50 shadow-lg text-sm lg:text-base"
              />

              {/* Submit Button */}
              <button 
                type="button" // Change to 'submit' for real logic
                className="absolute right-2 top-2 bottom-2 bg-[#151515] hover:bg-black text-white px-6 lg:px-8 rounded-full text-sm lg:text-md font-semibold tracking-wider transition-transform hover:scale-105"
              >
                SUBMIT
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}