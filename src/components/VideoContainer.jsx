// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import API_KEY, { YOUTUBE_VIDEO_API } from "../constant/youtube";
// // import VideoCart from "./VideoCart";
// // import { Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { setHomeVideo } from "../utils/appSlice";

// // const VideoContainer = () => {
// //   const { video, category } = useSelector((store) => store.app);
// //   console.log(category);
// //   const dispatch = useDispatch();

// //   const fetchingYoutubeVideo = async () => {
// //     try {
// //       const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
// //       dispatch(setHomeVideo(res?.data?.items));
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// //   const fetchVideoByCategory = async (category) => {
// //     try {
// //       const res = await axios.get(
// //         `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
// //       );
// //       dispatch(setHomeVideo(res?.data?.items));
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// //   useEffect(() => {
// //     if (category === "All") {
// //       fetchingYoutubeVideo();
// //     } else {
// //       fetchVideoByCategory(category);
// //     }
// //   }, [category]);

// //   return (
// //     <div className="grid grid-cols-4 gap-3">
// //       {video.map((item) => {
// //         console.log(item);
// //         return (
// //           <Link
// //             to={`/watch?v=${
// //               typeof item.id === "object" ? item.id.videoId : item.id
// //             }`}
// //             key={typeof item.id === "object" ? item.id.videoId : video.id}
// //           >
// //             <VideoCart item={item} />
// //           </Link>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default VideoContainer;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setHomeVideo } from "../utils/appSlice";
// import VideoCart from "./VideoCart";
// import { fetchYoutubeVideos, fetchVideosByCategory } from "../functions/api";

// const VideoContainer = () => {
//   const { video, category, open } = useSelector((store) => store.app);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchVideos = async () => {
//       let videos;
//       if (category === "All") {
//         videos = await fetchYoutubeVideos();
//       } else {
//         videos = await fetchVideosByCategory(category);
//       }
//       dispatch(setHomeVideo(videos));
//     };

//     fetchVideos();
//   }, [category]);

//   return (
//     <div className={`grid ${open ? "grid-cols-4" : "grid-cols-5"} gap-3`}>
//       {video.map((item) => (
//         <Link
//           to={`/watch?v=${
//             typeof item.id === "object" ? item.id.videoId : item.id
//           }`}
//           key={typeof item.id === "object" ? item.id.videoId : item.id}
//         >
//           <VideoCart item={item} />
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default VideoContainer;

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
        // Fetch initial videos when the app starts
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
        // Fetch videos based on selected category
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
