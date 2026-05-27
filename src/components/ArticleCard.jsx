import React from "react";

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      <img
        src={article.image}
        alt={article.title}
        className="rounded-md mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-lg font-semibold text-secondary">{article.title}</h3>
      <p className="text-sm mt-2">{article.summary}</p>
      <button className="mt-4 text-primary font-semibold hover:underline">
        Read More →
      </button>
    </div>
  );
}
