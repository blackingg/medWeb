import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { BlogPost } from "../data";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const handleBackClick = () => {
    navigate("/blog");
  };

  useEffect(() => {
    const foundPost = BlogPost.find((post) => post.id === Number(id));
    setPost(foundPost);
  }, [id]);

  return (
    <>
      {post ? (
        <div className="bg-white justify-center items-center px-[8%] lg:px-[15%] my-10">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-[#6F4E37]">{post.title}</h1>
            <button
              onClick={handleBackClick}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoArrowBackCircle
                size={30}
                className="text-purple-500"
              />
            </button>
          </div>

          <div className="py-5">
            <img
              src={post.image}
              alt={post.title}
              className="w-full max-h-[300px] object-cover rounded-lg mb-4"
            />
            <p className="text-purple-500 text-xl font-bold capitalize">
              {post.author}
            </p>
          </div>

          <div className="overflow-y-auto lg:w-[70%]">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-[#333] leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleBackClick}
              className="bg-purple-500 hover:bg-[#260e3b] text-white font-bold py-2 px-4 rounded transition-all"
            >
              Go Back
            </button>
          </div>
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
