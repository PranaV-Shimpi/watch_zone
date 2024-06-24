import Avatar from "react-avatar";
import React, { useEffect, useState } from "react";
import { AvatarGenerator } from "random-avatar-generator";

const ChatMessage = ({ item }) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [messageLoaded, setMessageLoaded] = useState(false); // State to track message loading
  const generator = new AvatarGenerator();

  useEffect(() => {
    // Generate a random avatar initially
    const randomAvatar = generator.generateRandomAvatar();
    setAvatarUrl(randomAvatar);

    // Simulate message loading effect
    setTimeout(() => {
      setMessageLoaded(true);
    }, 400); 
  }, []);

  return (
    <div className="flex items-start space-x-2 py-2 mx-2">
      {/* Conditional Rendering based on message loading state */}
      {!messageLoaded ? (
        <div className="flex-shrink-0 mx-auto">
          <div className="loader animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-900 "></div>
        </div>
      ) : (
        <>
          {/* Avatar */}
          <div className="flex-shrink-0">
            {item.name === "Radhe" ? (
              <Avatar
                src="https://cdn4.sharechat.com/beautifulgirlprofilepicture_2fd82a95_1601311911497_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg"
                size={35}
                round={true}
              />
            ) : (
              <Avatar src={avatarUrl} size={35} round={true} />
            )}
          </div>

          {/* Name and Message */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-center mb-1">
              <h1 className="font-bold text-sm">{item.name}</h1>
            </div>
            <p className="text-sm">{item.message}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatMessage;
