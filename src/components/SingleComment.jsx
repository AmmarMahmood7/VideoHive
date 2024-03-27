import React from "react";
import { FaUserCircle } from "react-icons/fa";

const SingleComment = ({ data }) => {
  const { name, comment } = data;

  return (
    <div className="flex p-2 bg-gray-100 rounded-xl font-mono mb-2">
      <FaUserCircle className="w-8 h-8" />
      <div className="px-3">
        <p className="font-bold tracking-wider">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default SingleComment;
