import React from "react";
import { Link } from "react-router-dom";
import "./Taskbar.css";

export default function Taskbar() {
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

    if (minutes % 10 == 0) {
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
        <div className="start__button">
          <div className="start__logo"></div>
          <p className="start__text">Start</p>
        </div>
        <div className="tasks" id="tasks">
          <div className="social-media">
            <div className="sidebar"></div>
            <Link to="https://www.linkedin.com/in/noam-rubin" target="_blank">
              <img id="linkedin-icon" src="/in_01.png" alt="linked-in" />
            </Link>
            <Link to="https://www.github.com/noamrubin22" target="_blank">
              <img id="github-icon" src="/gihub_01.png" alt="github" />
            </Link>
            <Link to="mailto:noamru22@gmail.com">
              <img id="email-icon" src="/email_01.png" alt="mail" />
            </Link>
            <div className="stripe"></div>
            <div className="sidebar"></div>
          </div>
          <div id="placeholder-tasks"></div>
        </div>
        <div className="start__time" id="start__time">
          <img id="volume-img" src="/volume_01.png" alt="volume" />
          <p className="start__time-text"></p>
        </div>
      </div>
      <div className="start__menu-main">
        <div className="start__menu-main-side">
          <div className="start__menu-main-side-text text">
            <p className="ninefive">95</p>
            <p className="windows">Windows</p>
          </div>
        </div>
        <div className="start__menu-main-items">
          <ul className="start__menu-main-items-list1">
            <li className="start__menu-main-items-item programs">
              <img
                className="programs-img icon"
                src="https://i.ya-webdesign.com/images/windows-95-icons-png-7.png"
                alt="Programs"
              />
              <p className="start__menu-main-items-item-title programs">
                <span className="underline">P</span>rojects
              </p>
              <div className="start__menu-main-items-item-arrowright"></div>
              <ul className="start__menu-sub sub__programs">
                <li className="start__menu-sub-items-item sub__programs-items mariposa-menu">
                  <img
                    className="accessories-img icon"
                    src="./images/Mariposa_01.png"
                    alt="Accessories"
                  />
                  <p className="start__menu-sub-items-item-title accessories">
                    Mariposa
                  </p>
                </li>
                <li className="start__menu-sub-items-item sub__programs-items music-menu">
                  <img
                    className="startup-img icon"
                    src="./images/Muxisvi_01.png"
                    alt="StartUp"
                  />
                  <p className="start__menu-sub-items-item-title startup">
                    Music visualization
                  </p>
                </li>
                <li className="start__menu-sub-items-item sub__programs-items gerrit-menu">
                  <img
                    className="dos-img icon"
                    src="./images/Gerrit_01.png"
                    alt="DOS"
                  />
                  <p className="start__menu-sub-items-item-title dos">Gerrit</p>
                </li>
                <li className="start__menu-sub-items-item sub__programs-items spotavibe-menu">
                  <img
                    className="dos-img icon"
                    src="./images/spotavibe_01.png"
                    alt="DOS"
                  />
                  <p className="start__menu-sub-items-item-title dos">
                    Spotavibe
                  </p>
                </li>
                <li className="start__menu-sub-items-item sub__programs-items robot-menu">
                  <img
                    className="dos-img icon"
                    src="./images/Tibet_robot_01.png"
                    alt="DOS"
                  />
                  <p className="start__menu-sub-items-item-title dos">
                    Singing Tibetan Robot
                  </p>
                </li>
              </ul>
            </li>
            <li className="start__menu-main-items-item documents about clickme-about">
              <img
                className="documents-img icon"
                src="./images/about_01.png"
                alt="About"
              />
              <p className="start__menu-main-items-item-title">
                <span className="underline">A</span>bout
              </p>
            </li>
            <li className="start__menu-main-items-item settings contact clickme-contact">
              <img id="contact-img" src="./images/contact.png" alt="contact" />
              <p className="start__menu-main-items-item-title settings">
                <span className="underline"> C</span>ontact
              </p>
            </li>
          </ul>
          <ul className="start__menu-main-items-list2">
            <li className="start__menu-main-items-item shutdown">
              <div className="shutdown-img icon bg-img"></div>
              <p className="start__menu-main-items-item-title shutdown">
                Sh<span className="underline">u</span>t Down...
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
