import React, { useState } from "react";
import Taskbar from "../Taskbar/Taskbar";
import "./Monitor.css";
import Test from "../Taskbar/Test"
import SideMenu from "../Taskbar/SideMenu/SideMenu"

export default function Monitor() {
  let [openMenu, setOpenMenu] = useState(false);

  const toggleStartMenu = () => {
    openMenu = !openMenu;
    setOpenMenu(openMenu);
    console.log(openMenu);
  };

  if (openMenu) {
    return (
      <div className="monitor">
        <Taskbar toggleStartMenu={toggleStartMenu} />
        <SideMenu />
      </div>
    )
  } else {
    return (
      <div className="monitor">
        <Taskbar toggleStartMenu={toggleStartMenu} />
      </div>
    );
  }
};
