import React from "react";

const NewsCard = ({ post }) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm mb-1">
          {post.title}
        </h3>
        <p className="text-xs text-gray-500">{post.author}</p>
      </div>
    </div>
  );
};

export default NewsCard;
