import React, { useState, useEffect } from "react";
import {NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import "./Navigation.css";

export default function Navigation(){
    
    const [isMenuShow, setIsMenuShow] = useState(false);

    const onBtnClick = () => {
    setIsMenuShow(false);
        };

    return(
        <div className="HeaderContainer">
            <Link to="HomeContainer" className="HeaderTitle" spy={true} smooth={true}>
                    Ag.
                </Link>
            <div className="HeaderBox">
                
            <div className= "HeaderMenu">
                <Link to="HomeContainer" className="NavBtn" spy={true} smooth={true}>
                    HOME
                </Link>
                
                <Link to="AboutContainer" className="NavBtn" spy={true} smooth={true}>
                    ABOUT
                </Link>

                <Link to="ProjectContainer" className="NavBtn" spy={true} smooth={true}>
                    PROJECTS
                </Link>

                <Link to="ProfileContainer" className="NavBtn" spy={true} smooth={true}>
                    PROFILE
                </Link>


                <Link to="ConnectContainer" className="NavBtn" spy={true} smooth={true}>
                    CONNECT
                </Link>
            </div>
        </div>
        </div>
    )
}