import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex px-3 py-1 my-1 bg-gray-200 rounded-md items-center shadow-md">
      <FaUserCircle className="w-4 h-4" />
      <span className="pl-2 capitalize font-semibold text-xs">{name}</span>
      <span className="pl-2 text-xs">{message}</span>
    </div>
  );
};

export default ChatMessage;
