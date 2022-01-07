import React, {useState, useEffect } from "react";
import '../components/Project.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Project() {
    var Carousel = require('react-responsive-carousel').Carousel;

    return(
        <>
            <div className="ProjectContainer">
                <div className="ProjectBox">
                    <span className="title1">Project 1 &nbsp; | &nbsp; About Me </span>
                    <hr className="ProjectLine1"/>
                    <p className="ProjectName1">간단한 자기소개 페이지 프로젝트</p>
                    <hr className="ProjectLine1"/>
                    <p className="TechStacks1">H T M L &nbsp;&nbsp;&nbsp;&nbsp; C S S &nbsp;&nbsp;&nbsp;&nbsp; J A V A S C R I P T</p>
                    <hr className="ProjectLine1"/>
                    <p className="ProjectIntro1">
                        웹 개발 공부를 시작한 이후 처음으로 진행한 프로젝트입니다.<br/><br/>
                        전체적인 구조는 HTML을, 디자인은 CSS로 진행했고,<br/><br/>
                        시계, 마우스 커서 효과, 배경 화면 변경 등의 부가 요소는 Vanilla JavaScript로 구현했습니다.
                    </p>
                    <hr className="ProjectLine1"/>
                    <a href="https://github.com/josuncom/blog_project" target="_blank">
                        <button href="">G I T H U B</button>
                    </a>
                    <a href="https://josuncom.github.io/blog_project/mainPage.html" target="_blank">
                        <button className="VisitBtn1">V I S I T</button>
                    </a>
                </div>
            
            <div className="ProjectImg1">
                <Carousel showArrows={true}>
                    <div>
                        <img src={require('./images/Home.JPG').default}></img>
                        <p className="legend">Home</p>
                    </div>
                    <div>
                        <img src={require('./images/1.JPG').default}></img>
                        <p className="legend">Who Am I ?</p>
                    </div>
                    <div>
                        <img src={require('./images/2.JPG').default}></img>
                        <p className="legend">What I Like ?</p>
                    </div>
                    <div>
                        <img src={require('./images/3.JPG').default}></img>
                        <p className="legend">Contact</p>
                    </div>
                </Carousel>
            </div>
            </div>
        </>
    )
}