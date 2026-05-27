import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 rounded-xl p-4 mb-6 flex flex-col md:flex-row items-center gap-4 shadow-sm">
      <img
        src="https://placehold.co/600x350"
        alt="Hero"
        className="w-full md:w-1/2 rounded-xl object-cover"
      />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Gideon Moi sees off ex-Ghana President at Kisumu Airport after Bondo visit
        </h2>
        <p className="text-gray-600 text-sm mb-3">
          A highlight of key political events and exclusive updates.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
