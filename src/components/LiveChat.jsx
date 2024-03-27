import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { generateRandomName, generateRandomSentence } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      //here we can fetch data directly from youtube api and dispatch an action
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomSentence(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const messages = useSelector((state) => state.chat.messages);
  return (
    <div>
      <div className="bg-slate-300 px-3 mx-3 rounded-md h-[400px] overflow-y-scroll text-xs flex flex-col-reverse w-full">
        {messages.map((message, index) => {
          return (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          );
        })}
      </div>
      <form
        className="m-2 p-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ammar Mahmood",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Add a comment..."
          className="bg-slate-200 w-full p-3 rounded-lg"
          value={liveMessage}
          onChange={(event) => {
            setLiveMessage(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default LiveChat;
