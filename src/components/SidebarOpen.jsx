import React from "react";
import { IoIosHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
import SidebarCollapsed from "./SidebarCollapsed";
import { Link } from "react-router-dom";
const SidebarOpen = () => {
  return (
    <div className="border-r m-3 p-3 ">
      <ul className="font-semibold text-md tracking-wide ">
        <Link to="/">
          <li className=" flex items-center mb-4">
            <IoIosHome className="mr-3 h-6 w-6" />
            Home
          </li>
        </Link>
        <li className="flex items-center mb-4">
          <SiYoutubeshorts className="mr-3 h-6 w-6" />
          shorts
        </li>
        <li className="flex items-center mb-4 ">
          <MdOutlineSubscriptions className="mr-3 h-6 w-6" />
          subscriptions
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default SidebarOpen;
