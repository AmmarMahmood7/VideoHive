import React from "react";
import { IoIosHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { Link } from "react-router-dom";

const SidebarCollapsed = () => {
  return (
    <div className="border-r m-3 p-3">
      <ul className="font-semibold text-md tracking-wide ">
        <Link to="/">
          <li className="mb-4">
            <IoIosHome className=" h-6 w-6" />
          </li>
        </Link>
        <li className="mb-4">
          <SiYoutubeshorts className="mr-3 h-6 w-6" />
        </li>
        <li className=" mb-4 ">
          <MdOutlineSubscriptions className="mr-3 h-6 w-6" />
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default SidebarCollapsed;
