import React from "react";

const FilterButton = ({ name }) => {
  return (
    <button className="bg-gray-200 rounded-lg text-xs px-4 py-2 font-semibold m-4 w-auto capitalize">
      {name}
    </button>
  );
};

export default FilterButton;
