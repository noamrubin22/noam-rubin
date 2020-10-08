import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import "./Taskbar.css";
import SideMenu from "./SideMenu/SideMenu"

export default function Taskbar(props) {
  let openMenu;
  // set clock
  setInterval(updateTime, 1000);

  function updateTime() {
    // Update the time box in the start bar every 10 seconds
    let today = new Date();
    let hours24 = today.getHours();
    let hours12;
    let minutes = today.getMinutes();
    let suffix = "";

    // define AM/PM
    if (hours24 >= 12) {
      suffix = " PM";
      hours12 = hours24 % 12;
    } else {
      suffix = " AM";
      hours12 = hours24;
    }

    if (minutes % 10 === 0) {
      //minutes = minutes + "0";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let time = hours12 + ":" + minutes + suffix;

    let timeBox = document.querySelector(".start__time-text");

    timeBox.innerHTML = time;
  }

  return (
    <div className="taskbar">
      <div className="start" id="start">
        <button className="start__button" onClick={props.toggleStartMenu}>
          <div className="start__logo"></div>
          <p className="start__text">Start</p>
        </button>
        <div className="tasks" id="tasks">
          <div className="social-media">
            <div className="sidebar"></div>
            <Link to="https://www.linkedin.com/in/noam-rubin"
              target="_blank">
              <img id="linkedin-icon" src="/in_01.png" alt="linked-in" />
            </Link>
            <Link to="https://www.github.com/noamrubin22"
              target="_blank" >
              <img id="github-icon" src="/gihub_01.png" alt="github" />
            </Link>
            <Link to="mailto:noamru22@gmail.com" >
              <img id="email-icon" src="/email_01.png" alt="mail" />
            </Link>
            <div className="stripe" ></div>
            <div className="sidebar" ></div>
          </div>
          <div id="placeholder-tasks"></div>
        </div>
        <div className="start__time" id="start__time">
          <img id="volume-img" src="/volume_01.png" alt="volume" />
          <p className="start__time-text"></p>
        </div>
      </div>
    </div>
  );
}