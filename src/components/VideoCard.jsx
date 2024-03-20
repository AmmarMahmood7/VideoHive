import React from "react";
import { formatNumber } from "../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-2 m-1  w-[18rem] shadow-sm hover:scale-105   hover:transition-transform duration-200">
      <img
        src={thumbnails.high.url}
        alt={title}
        className="rounded-md object-cover w-[18rem] h-[9rem] hover:rounded-none hover:bg-gray-50 hover:opacity-80"
      />

      <h2 className="leading-6 font-mono font-semibold text-sm mt-2 mb-2 ">
        {title.length >= 80 ? `${title.substring(0, 50)}...` : title}
      </h2>
      <h4 className="font-mono text-sm font-medium ">{channelTitle}</h4>
      <p className="font-mono text-sm ">{formatNumber(viewCount)} views</p>
    </div>
  );
};

export default VideoCard;
