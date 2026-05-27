import React from "react";

export default function Header() {
  return (
    <header className="bg-primary text-white py-4 shadow-md w-full">
      <div className="mx-auto flex flex-row items-center justify-between px-4 w-full max-w-7xl">
        
        {/* Left Side: Logo & Text aligned horizontally */}
        <div className="flex flex-row items-center space-x-2 shrink-0">
          {/* Fallback box for the ZETU TIMES logo icon */}
          <div className="bg-white px-1.5 py-1 rounded shrink-0 flex items-center justify-center">
            <span className="text-primary font-extrabold text-[10px] leading-none tracking-tighter">
              ZETU
            </span>
          </div>
          
          {/* The main title text - locked to one single horizontal line */}
          <h1 className="text-lg md:text-2xl font-bold tracking-tight whitespace-nowrap leading-none m-0 p-0 block">
            Zetu Times
          </h1>
        </div>

        {/* Right Side: Small mobile search bar pushed to the far right */}
        <div className="flex items-center justify-end ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-28 sm:w-44 md:w-64 px-3 py-1.5 rounded text-sm text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all"
          />
        </div>

      </div>
    </header>
  );
}
