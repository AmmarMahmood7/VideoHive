import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/navigationSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParam] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <div className="m-3 p-3">
        <iframe
          className="rounded-2xl "
          width="900"
          height="600"
          src={`https://www.youtube.com/embed/${searchParam.get(
            "v"
          )}?si=edIcran2nrDN9306`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
