import React from "react";

export default function Header() {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Zetu Times</h1>
        <nav className="space-x-4 text-sm md:text-base">
          <a href="#" className="hover:underline">Politics</a>
          <a href="#" className="hover:underline">Sports</a>
          <a href="#" className="hover:underline">Business</a>
          <a href="#" className="hover:underline">Entertainment</a>
          <a href="#" className="hover:underline">Tech</a>
        </nav>
      </div>
    </header>
  );
}
