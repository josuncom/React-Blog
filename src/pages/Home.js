import React, {useEffect, useState } from "react";
import '../components/Home.css';

export default function Home() {

    const [isHomeContainerScrolled, setIsHomeContainersScrolled] = useState(false);    // Home의 Top 값
    const homeContainer = document.getElementsByClassName('HomeContainer');
    const [homeContainerFromTop, setHomeContainerFromTop] = useState(0);

    const showHomeContainer = () => {
        if(homeContainerFromTop <= 100){
            setIsHomeContainersScrolled(true);
        }
    }

    const listener = () => {
        if(homeContainer[0])
        {
            setHomeContainerFromTop(homeContainer[0].getBoundingClientRect().top);
        }
    }

    useEffect(() => {
            window.addEventListener('scroll', listener);
            showHomeContainer(homeContainerFromTop);
        }
    );

    return(
        <>
            <div className={isHomeContainerScrolled ? 'HomeContainer HomeContainerScrolled' : 'HomeContainer'}>
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