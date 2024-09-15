import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { IoArrowBackCircle } from "react-icons/io5";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setpost] = useState(null);

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/posts");
  };

  useEffect(() => {});

  return (
    <>
      {post ? (
        <div className="bg-gray-100 p-4 px-10 pt-24 pb-16">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold mb-4 text-[#6F4E37]">
              {post.title}
            </h1>
            <button
              onClick={handleBackClick}
              className="mb-4 text-[#6F4E37] font-semibold hover:underline"
            >
              <IoArrowBackCircle size={30} />
            </button>
          </div>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        </div>
      ) : (
        <p className="h-screen w-screen flex items-center justify-center gap-5">
          <h1 className="text-4xl font-bold mb-4 text-[#B22222]">
            Post not found
          </h1>
          <button
            onClick={handleBackClick}
            className="mb-4 text-[#B22222] font-semibold hover:underline"
          >
            <IoArrowBackCircle size={30} />
          </button>
        </p>
      )}
    </>
  );
};

export default PostDetails;
