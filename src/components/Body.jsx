import React from "react";
import SidebarOpen from "./SidebarOpen";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import SidebarCollapsed from "./SidebarCollapsed";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  //early return
  return (
    <div className="flex">
      {isMenuOpen ? <SidebarOpen /> : <SidebarCollapsed />}
      <Outlet />
    </div>
  );
};

export default Body;
