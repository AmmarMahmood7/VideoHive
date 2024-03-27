import React from "react";
import SingleComment from "./SingleComment";
import { commentsData } from "../utils/constants";

const CommentsList = ({ commentsData }) => {
  return (
    <>
      {commentsData?.map((comment, index) => {
        return (
          <div>
            <SingleComment key={index} data={comment} />
            <div className="pl-4 m-4 border border-l-black">
              <CommentsList commentsData={comment.replies} />
            </div>
          </div>
        );
      })}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-3 m-3 ">
      <h2 className="font-bold text-2xl mb-3">Comments :</h2>
      <CommentsList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
