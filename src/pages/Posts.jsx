import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "../data";

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const PostsPerPage = 6; // Define how many posts to show per page
  const navigate = useNavigate();

  // Get current posts based on pagination
  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPost = BlogPost.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(BlogPost.length / PostsPerPage);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const showPages = 5;

    if (totalPages <= showPages + 2) {
      // Display all page numbers if total pages are within limit
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Handle ellipsis logic for large number of pages
      pageNumbers.push(1); // First page

      if (currentPage <= showPages - 2) {
        // Display initial pages
        for (let i = 2; i <= showPages; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
      } else if (currentPage > totalPages - showPages + 2) {
        // Display ending pages
        pageNumbers.push("...");
        for (let i = totalPages - showPages + 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Display middle pages with ellipsis on both sides
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages); // Last page
    }

    return pageNumbers;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog posts</h1>

      {/* Blog post grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {currentPost.map((post) => (
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
              <h2 className="text-xl lg:text-2xl font-bold mb-2 text-[#333]">
                {post.title}
              </h2>
              <span className="text-[#6F4E37] font-semibold hover:underline">
                View post
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="mt-8 flex justify-center">
        {getPageNumbers().map((number, index) => (
          <button
            key={index}
            onClick={() => number !== "..." && paginate(number)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === number
                ? "bg-purple-500 text-white"
                : number === "..."
                ? "bg-gray-100 text-gray-700 cursor-default"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            disabled={number === "..."}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Posts;
