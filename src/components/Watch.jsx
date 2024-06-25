import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";
import { getSingleVideo, getYoutubeChannelName } from "../functions/api";
import LiveChat from "./LiveChat";
import CommentList from "./CommentList"; // Import CommentList component

const Watch = () => {
  const [input, setInput] = useState("");
  const [singleVideo, setSingleVideo] = useState(null);
  const [videoDescription, setVideoDescription] = useState("");
  const [fullDescriptionVisible, setFullDescriptionVisible] = useState(false); // State to track if full description is visible
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [ytIcon, setYtIcon] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchVideo = async () => {
      const video = await getSingleVideo(videoId);
      setSingleVideo(video);
      const iconUrl = await getYoutubeChannelName(video.snippet.channelId);
      setYtIcon(iconUrl);
      // Set initial short description
      setVideoDescription(`${video.snippet.description.substring(0, 200)}...`);
    };
    fetchVideo();
  }, [videoId]);

  const loadFullDescription = () => {
    setVideoDescription(singleVideo.snippet.description);
    setFullDescriptionVisible(true);
  };

  const loadShortDescription = () => {
    setVideoDescription(
      `${singleVideo.snippet.description.substring(0, 200)}...`
    );
    setFullDescriptionVisible(false);
  };

  const toggleDescription = () => {
    if (fullDescriptionVisible) {
      loadShortDescription();
    } else {
      loadFullDescription();
    }
  };

  const sendMessage = () => {
    dispatch(setMessage({ name: "Radhe", message: input }));
    setInput("");
  };

  return (
    <div className="flex ml-4 w-[100%] mt-2">
      <div className="flex w-[97%]">
        <div>
          <iframe
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="font-bold mt-2 text-lg">
            {singleVideo?.snippet?.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-[35%]">
              <div className="flex">
                <Avatar src={ytIcon} size={35} round={true} />
                <h1 className="font-bold ml-2">
                  {singleVideo?.snippet?.channelTitle}
                </h1>
              </div>
              <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex items-center w-[45%] justify-between mt-2">
              <div className="flex items-center justify-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <AiOutlineLike size="20px" className="mr-1" />
                <span className="mr-3">
                  {singleVideo?.statistics?.likeCount}
                </span>
                |
                <AiOutlineDislike className="ml-2" size="20px" />
              </div>
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <PiShareFatLight size="20px" className="mr-2" />
                <span>Share</span>
              </div>
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <GoDownload />
                <span>Download</span>
              </div>
            </div>
          </div>
          {/* Display video description */}
          <div className="mt-4">
            <h2 className="font-bold text-lg mb-2">Video Description</h2>
            <p className="text-sm">
              {videoDescription}{" "}
              {fullDescriptionVisible ? (
                <button
                  className="text-blue-500 hover:underline"
                  onClick={loadShortDescription}
                >
                  Show less
                </button>
              ) : (
                <button
                  className="text-blue-500 hover:underline"
                  onClick={loadFullDescription}
                >
                  Show more
                </button>
              )}
            </p>
          </div>
          {/* Add the CommentList component */}
          <h2 className="font-bold text-lg mt-4">Comments</h2>
          <CommentList videoId={videoId} />
        </div>
        <div className="w-[100%] border border-gray-300 ml-8 rounded-lg h-fit">
          <div className="flex justify-between items-center text-center bg-gray-200">
            <h1 className="mx-2">Top Chat</h1>
            <BsThreeDotsVertical />
          </div>
          <div className=".no-scrollbar overflow-y-auto h-[28rem] flex flex-col-reverse">
            <LiveChat />
          </div>
          <div className="flex items-center justify-between border-t p-2 w-full">
            <div className="flex items-center w-full">
              <div className="mr-2">
                <Avatar
                  src="https://cdn4.sharechat.com/beautifulgirlprofilepicture_2fd82a95_1601311911497_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg"
                  size={35}
                  round={true}
                />
              </div>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border-b border-gray-300 outline-none px-2 py-1"
                type="text"
                placeholder="Send message..."
              />
              <div className="bg-gray-200 cursor-pointer p-2 rounded-full ml-2">
                <LuSendHorizonal onClick={sendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
