import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/appSlice";
import VideoCart from "./VideoCart";
import { fetchYoutubeVideos, fetchVideosByCategory } from "../functions/api";

const VideoContainer = () => {
  const { video, category, open } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitialVideos = async () => {
      try {
        const initialVideos = await fetchYoutubeVideos();
        dispatch(setHomeVideo(initialVideos));
      } catch (error) {
        console.error("Error fetching initial videos:", error);
      }
    };

    fetchInitialVideos();
  }, []);

  useEffect(() => {
    const fetchVideosBySelectedCategory = async () => {
      try {
        let videos;
        if (category === "All") {
          videos = await fetchYoutubeVideos();
        } else {
          videos = await fetchVideosByCategory(category);
        }
        dispatch(setHomeVideo(videos));
      } catch (error) {
        console.error("Error fetching videos by category:", error);
      }
    };

    fetchVideosBySelectedCategory();
  }, [category]);

  return (
    <div className={`grid ${open ? "grid-cols-4" : "grid-cols-5"} gap-3`}>
      {video.map((item) => (
        <Link
          to={`/watch?v=${
            typeof item.id === "object" ? item.id.videoId : item.id
          }`}
          key={typeof item.id === "object" ? item.id.videoId : item.id}
        >
          <VideoCart item={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
