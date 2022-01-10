import React from "react";
import '../components/Profile.css';
import ReactTypingEffect from 'react-typing-effect';

export default function Profile() {
    return(
        <>
            <div className="ProfileContainer">
            <div className="ProfileTitle">Profile</div>
                <div className="ProfileBox">
                    <div className="ProfileImage">
                        <img src={require('./images/조은.jpg').default}/>
                    </div>
                    <div className="ProfileContents">
                        <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="200" eraseDelay="10000" 
                        text={["이 름  :  조 은"]}/><br/>
                        <hr className="ProfileLine"/>
                        <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="200" eraseDelay="10000" 
                        text={["이 름  :  조 은"]}/><br/>
                        <hr className="ProfileLine"/>
                        <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="200" eraseDelay="10000" 
                        text={["이 름  :  조 은"]}/><br/>
                        <hr className="ProfileLine"/>
                        <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="200" eraseDelay="10000" 
                        text={["이 름  :  조 은"]}/><br/><br/>
                        <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="200" eraseDelay="10000" 
                        text={["이 름  :  조 은"]}/><br/><br/>
                    </div>
                        </div>    
                    </div>
        </>
    )
}