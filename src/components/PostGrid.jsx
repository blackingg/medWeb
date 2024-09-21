import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "../data";
import { useNavigate } from "react-router-dom";

const PostGrid = () => {
  const navigate = useNavigate();
  const [visiblePosts, setVisiblePosts] = useState(6);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog posts</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {BlogPost.slice(0, visiblePosts).map((post) => (
          <div
            key={post.id}
            className="block bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden cursor-pointer"
            onClick={() => navigate(`/blog/${post.id}`)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#333]">
                {post.title}
              </h2>
              <span className="text-[#6F4E37] font-semibold hover:underline">
                View post
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={""}
          className="bg-purple-500 hover:bg-[#260e3b] text-white font-bold py-2 px-4 rounded transition-all"
        >
          <Link to={"/blog"}>Show More</Link>
        </button>
      </div>
    </div>
  );
};

export default PostGrid;
