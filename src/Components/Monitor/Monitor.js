import React, { useState } from "react";
import Taskbar from "../Taskbar/Taskbar";
import "./Monitor.css";
import SideMenu from "../Taskbar/SideMenu/SideMenu"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        <TransitionGroup className="tryout">
          <CSSTransition
            // in={true}
            timeout={1000}
            classNames="fade"
            key={1}>
            <SideMenu />
          </CSSTransition>
        </TransitionGroup>
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
