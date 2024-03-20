import React from "react";
import FilterButton from "./FilterButton";

const list = [
  "All",
  "News",
  "Music",
  "Cricket",
  "latest",
  "tennis",
  "t-series",
  "Bollywood Music",
  "Indian Pop Music",
  "Live",
  "Playlists",
  "Sitcoms",
  "Gameshows",
];
const ButtonList = () => {
  return (
    <div>
      {list.map((item, index) => {
        return <FilterButton key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
