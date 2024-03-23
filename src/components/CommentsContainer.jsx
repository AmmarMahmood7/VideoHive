import React from "react";
import SingleComment from "./SingleComment";
import { FaUserCircle } from "react-icons/fa";

const commentsData = [
  {
    name: "John Doe",
    comment: "This is a sample comment",
    replies: [
      {
        name: "john smith",
        comment: "this is a reply to the sample comment",
        replies: [
          {
            name: "john smith",
            comment: "this is a reply to the sample comment",
            replies: [{}],
          },
          {
            name: "jane doe",
            comment: "this is  reply2 to the sample comment",
          },
        ],
      },
      {
        name: "jane doe",
        comment: "this is  reply2 to the sample comment",
      },
    ],
  },
  {
    name: "John Doe",
    comment: "This is a sample comment",
    replies: [
      {
        name: "john smith",
        comment: "this is a reply to the sample comment",
        replies: [
          {
            name: "john smith",
            comment: "this is a reply to the sample comment",
            replies: [{}],
          },
          {
            name: "jane doe",
            comment: "this is  reply2 to the sample comment",
          },
        ],
      },
      {
        name: "jane doe",
        comment: "this is  reply2 to the sample comment",
      },
    ],
  },
  {
    name: "John Doe",
    comment: "This is a sample comment",
    replies: [
      {
        name: "john smith",
        comment: "this is a reply to the sample comment",
        replies: [
          {
            name: "john smith",
            comment: "this is a reply to the sample comment",
            replies: [{}],
          },
          {
            name: "jane doe",
            comment: "this is  reply2 to the sample comment",
          },
        ],
      },
      {
        name: "jane doe",
        comment: "this is  reply2 to the sample comment",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;

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

const CommentsList = ({ commentsData }) => {
  return (
    <div>
      {commentsData.map((comment, index) => {
        return (
          <div>
            <SingleComment data={comment} key={index} />
          </div>
        );
      })}
    </div>
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
