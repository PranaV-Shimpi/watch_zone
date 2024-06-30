// RelatedVideos.js
import React from "react";

const RelatedVideos = ({ relatedVideos, onVideoClick }) => {
  return (
    <div>
      {relatedVideos.slice(0, 5).map((item) => (
        <div
          className="flex flex-row mb-4 cursor-pointer"
          key={item.id.videoId}
          onClick={() => onVideoClick(item.id.videoId)}
        >
          <div className="flex">
            <img
              className="w-40 h-24 object-cover rounded-lg"
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <div className="ml-2">
              <h3 className="text-sm font-bold">{item.snippet.title}</h3>
              <p className="text-xs">{item.snippet.channelTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
