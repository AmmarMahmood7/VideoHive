import React from "react";
import SingleComment from "./SingleComment";

const CommentsContainer = () => {
  return (
    <div className="p-3 m-3 ">
      <h2 className="font-bold text-2xl mb-3">Comments :</h2>
      <SingleComment />
    </div>
  );
};

export default CommentsContainer;
