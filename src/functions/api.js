import axios from "axios";
import API_KEY from '../constant/youtube';

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