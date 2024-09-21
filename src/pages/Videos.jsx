import React, { useState } from "react";
import { videos } from "../data";

const VideoModal = ({ video, onClose }) => {
  const embedUrl = video.url.replace("watch?v=", "embed/");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-[90%] md:w-[80%] h-[80%]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{video.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="py-5 w-full h-[90%]">
          <iframe
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const showPages = 6;

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
        for (let i = totalPages - showPages + 1; i < totalPages; i++) {
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-purple-500 font-bold mb-6">Videos</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={() => openVideo(video)}
          >
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={`https://img.youtube.com/vi/${
                  video.url.split("v=")[1]
                }/0.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 hover:backdrop-blur-sm">
                <svg
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-purple-600 text-lg mb-2">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
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
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={closeVideo}
        />
      )}
    </div>
  );
};

export default Videos;
