import React from "react";
import { Link } from 'react-router-dom';
import '../components/About.css';
import ReactTypingEffect from 'react-typing-effect';

export default function About() {
    return(
        <>
            <div className="AboutContainer">
            <div className="AboutContainerTitle">About Me</div>
                <div className="AboutBox">
                <div className="WhoAmI">
                <h1>Who Am I ?</h1><hr className="AboutLine"/><br/><br/>
                    <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                    text={["1998.07.20 출생"]}/><br/><br/>
                    <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                    text={["저현고등학교 졸업 (2014.03 - 2017.02)"]}/><br/><br/>
                    <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                    text={["건국대학교 재학 중 (2017.03 - 현재)"]}/><br/><br/>
                    <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                    text={["스마트ICT융합공학과 전공"]}/>
                </div>
                <div className="WhatILike">
                <h1>What I Like ?</h1><hr className="AboutLine"/><br/><br/>
                    <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" className="typeLike" 
                    text={["사람들과의 만남을 좋아합니다."]}/><br/><br/>
                    <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" className="typeLike" 
                    text={["운동하는 것과 보는 것을 즐깁니다. 특히 농구!"]}/><br/><br/>
                    <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" className="typeLike" 
                    text={["먹는데 정말 정말 진심입니다."]}/><br/><br/>
                    <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" className="typeLike" 
                    text={["노래 감상과 부르는 것도 좋아합니다."]}/>
                </div>
                
                </div>
            </div>
        </>
    );
}