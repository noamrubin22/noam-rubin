import React from 'react'
import "./SideMenu.css"

export default function SideMenu() {
    return (
        <div className="start__menu-main" >
            <div className="start__menu-main-side" >
                <div className="start__menu-main-side-text text" >
                    <p className="ninefive"> 95</p>
                    <p className="windows">Windows </p>
                </div>
            </div>
            <div className="start__menu-main-items">
                <ul className="start__menu-main-items-list1">
                    <li className="start__menu-main-items-item programs">
                        <img className="programs-img icon" src={"https://i.ya-webdesign.com/images/windows-95-icons-png-7.png"} alt="Programs" />
                        <p className="start__menu-main-items-item-title programs">
                            <span className="underline" >P</span>rojects</p>
                        <div className="start__menu-main-items-item-arrowright"></div>
                        <ul className="start__menu-sub sub__programs">
                            <li className="start__menu-sub-items-item sub__programs-items mariposa-menu">
                                <img className="accessories-img icon" src={"./images/Mariposa_01.png"} alt="Accessories" />
                                <p className="start__menu-sub-items-item-title accessories" >Mariposa</p>
                            </li>
                            <li className="start__menu-sub-items-item sub__programs-items music-menu">
                                <img className="startup-img icon" src={"./images/Muxisvi_01.png"} alt="StartUp" />
                                <p className="start__menu-sub-items-item-title startup" >Music visualization</p>
                            </li>
                            <li className="start__menu-sub-items-item sub__programs-items gerrit-menu">
                                <img className="dos-img icon" src={"./images/Gerrit_01.png"} alt="DOS" />
                                <p className="start__menu-sub-items-item-title dos">Gerrit</p>
                            </li>
                            <li className="start__menu-sub-items-item sub__programs-items spotavibe-menu">
                                <img className="dos-img icon" src="./images/spotavibe_01.png" alt="DOS" />
                                <p className="start__menu-sub-items-item-title dos" >Spotavibe</p>
                            </li>
                            <li className="start__menu-sub-items-item sub__programs-items robot-menu">
                                <img className="dos-img icon" src={"./images/Tibet_robot_01.png"} alt="DOS" />
                                <p className="start__menu-sub-items-item-title dos">Singing Tibetan Robot</p>
                            </li>
                        </ul>
                    </li>
                    <li className="start__menu-main-items-item documents about clickme-about"><img className="documents-img icon" src={"about_01.png"} alt="About" /><p className="start__menu-main-items-item-title" >
                        <span className="underline" >A</span>bout </p>
                    </li>
                    <li className="start__menu-main-items-item settings contact clickme-contact"><img id="contact-img" src={"contact.png"} alt="contact" />
                        <p className="start__menu-main-items-item-title settings">
                            <span className="underline" > C</span>ontact</p>
                    </li>
                </ul>
                <ul className="start__menu-main-items-list2" >
                    <li className="start__menu-main-items-item shutdown">
                        <div className="shutdown-img icon bg-img">
                        </div>
                        <p className="start__menu-main-items-item-title shutdown"><span className="underline">S</span>leep..</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}