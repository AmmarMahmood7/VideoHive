import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex px-3 py-2 my-3 bg-gray-200 rounded-md items-center">
      <FaUserCircle className="w-8 h-8" />
      <span className="pl-3 capitalize">{name}</span>
      <span className="pl-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
