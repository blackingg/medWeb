import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className=" container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog posts</h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="block bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden cursor-pointer"
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-[#333]">
                {post.title}
              </h2>
              <span className="text-[#6F4E37] font-semibold hover:underline">
                View post
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
