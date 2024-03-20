import React from "react";
import { FaUserCircle } from "react-icons/fa";

const SingleComment = () => {
  return (
    <div className="flex p-2 bg-gray-100 rounded-xl font-mono mb-2">
      <FaUserCircle className="w-8 h-8" />
      <div className="px-3">
        <p className="font-bold tracking-wider">Ammar</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ut?
        </p>
      </div>
    </div>
  );
};

export default SingleComment;
