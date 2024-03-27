import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("api polling");
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-black px-3 mx-3 rounded-md h-[400px] overflow-y-scroll text-xs">
      <ChatMessage name="ammar" message="this is my first comment" />
    </div>
  );
};

export default LiveChat;
