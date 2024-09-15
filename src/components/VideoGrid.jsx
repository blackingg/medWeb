import React, { useState } from "react";

const VideoModal = ({ video, onClose }) => {
  const embedUrl = video.url.replace("watch?v=", "embed/");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full h-[80%]">
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

const VideoGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Understanding Diabetes",
      url: "https://www.youtube.com/watch?v=J8zhAWjpFaA",
    },
    {
      id: 2,
      title: "Heart Health Basics",
      url: "https://www.youtube.com/watch?v=J8zhAWjpFaA",
    },
    {
      id: 3,
      title: "Mental Health Awareness",
      url: "https://www.youtube.com/watch?v=J8zhAWjpFaA",
    },
    {
      id: 4,
      title: "Heart Health Basics",
      url: "https://www.youtube.com/watch?v=J8zhAWjpFaA",
    },
    {
      id: 5,
      title: "Heart Health Basics",
      url: "https://www.youtube.com/watch?v=J8zhAWjpFaA",
    },
    {
      id: 6,
      title: "Heart Health Basics",
      url: "https://www.youtube.com/watch?v=J8zhAWjpFaA",
    },
  ];

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Educational Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={() => openVideo(video)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={`https://img.youtube.com/vi/${
                  video.url.split("v=")[1]
                }/0.jpg`}
                alt={video.title}
                className="w-full h-full object-cover hover:brightness-50 transition-all"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
            </div>
          </div>
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

export default VideoGrid;
