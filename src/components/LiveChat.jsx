import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const message = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        setMessage({
          name: generateRandomName(),
          message: generateRandomMessage(16),
        })
      );
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className=" py-2">
      <div className="max-w-lg mx-auto border rounded-lg shadow-md bg-white ">
        <div className="space-y-4">
          {message.map((item, idx) => (
            <ChatMessage key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
