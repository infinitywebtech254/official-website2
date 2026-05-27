import React from "react";

const NavBar = () => {
  const categories = [
    "News",
    "Inside Politics",
    "Sports",
    "Business",
    "Insights",
    "Lifestyle",
  ];

  return (
    <nav className="bg-gray-200 border-b border-gray-300">
      <ul className="flex justify-center gap-6 py-3 text-sm font-medium">
        {categories.map((cat, i) => (
          <li
            key={i}
            className="cursor-pointer hover:text-red-600 transition-colors"
          >
            {cat}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
