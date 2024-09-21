import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "../data";
import Search from "../components/Search";

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState(BlogPost);
  const PostsPerPage = 8;
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const filtered = BlogPost.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / PostsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const showPages = 5;

    if (totalPages <= showPages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      if (currentPage <= showPages - 2) {
        for (let i = 2; i <= showPages; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
      } else if (currentPage > totalPages - showPages + 2) {
        pageNumbers.push("...");
        for (let i = totalPages - showPages + 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-[2%] mb-[10%]">
      <h1 className="text-3xl text-purple-500 font-bold mb-6">Blog posts</h1>
      <Search onSearch={handleSearch} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {currentPosts.map((post) => (
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
              <h2 className="text-lg font-bold mb-2 text-[#333]">
                {post.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center mt-8 text-gray-600">
          No posts found matching your search.
        </p>
      )}

      {filteredPosts.length > PostsPerPage && (
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
      )}
    </div>
  );
};

export default Posts;
