import axios from "axios";
import API_KEY, { YOUTUBE_VIDEO_API } from "../constant/youtube";

// Function to fetch all YouTube videos
export const fetchYoutubeVideos = async () => {
  try {
    const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
    return res?.data?.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Function to fetch videos by category
export const fetchVideosByCategory = async (category) => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
    );
    return res?.data?.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Function to get a single video details
export const getSingleVideo = async (videoId) => {
  try {
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
    return res.data.items[0];
  } catch (error) {
    console.error(error);
  }
};

// Function to get YouTube channel details
export const getYoutubeChannelName = async (channelId) => {
  try {
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`);
    return res.data.items[0].snippet.thumbnails.high.url;
  } catch (error) {
    console.error(error);
  }
};


// Function to fetch comments for a video
export const fetchComments = async (videoId) => {
  try {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`);
    return res.data.items;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};