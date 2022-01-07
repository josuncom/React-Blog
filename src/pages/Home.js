import React from "react";
import '../components/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <>
            <div className="HomeContainer">
                <div className="HomeBox">
                    <div className="HomeBoxIntro">
                        <h1>
                            Hello,<br/>I'm  Eun  Cho
                        </h1><br/>
                        <p>Junior Web FrontEnd Developer</p><br/>
                        <hr className="HomeLine"/>
                    </div>
                    <div className="HomeBoxQuote">
                        The most beautiful thing in the world is,<br/><br/> of course,<br/><br/>the world itself.
                    </div>

                    <div className="HomeLink">
                        <a className="gitLink" href="https://github.com/josuncom" target="_blank">G I T H U B</a>
                        <span> | </span>
                        <a className="blogLink" href="https://velog.io/@josuncom" target="_blank">B L O G</a>
                    </div>
                </div>
            </div>
        </>
    )
}