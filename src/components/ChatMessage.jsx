import Avatar from "react-avatar";
import React, { useEffect, useState } from "react";
import { AvatarGenerator } from "random-avatar-generator";

const ChatMessage = ({ item }) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const generator = new AvatarGenerator();
  useEffect(() => {
    // Generate a random avatar
    const randomAvatar = generator.generateRandomAvatar();
    setAvatarUrl(randomAvatar);
  }, []);
  return (
    <div className="flex items-center ">
      <div className="mx-2">
        <Avatar src={avatarUrl} size={25} round={true} />
      </div>
      <div className="flex items-center">
        <h1 className="ml-2 font-bold text-sm">{item.name}</h1>
        <p className="ml-2 py-2 text-sm">{item.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
