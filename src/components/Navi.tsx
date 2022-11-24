import React, { useState } from "react";
import { useEffect } from "react";
import Github from "components/icon/Github"



const Navi = ({headerStyle} : any) => {
    const [fade, setFade] : [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const [showSidebar, setShowSidebar] : [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setFade(true)
        }, 1000);
    }, [])



    return (
        <>
            <div className={"navi " + (fade ? "fadeIn " : "") + headerStyle}>
                <div>
                    <a href="/#TitlePage">JUUCK14</a>
                </div>
                <div className="largeNavPages">
                    <a href="/#TitlePage">Title</a>
                    <a href="/#IntroducePage">Introduction</a>
                    <a href="/#TimelinePage">Projects</a>
                    <a href="/#ContactPage">Contact</a>
                    <Github href="https://github.com/juuck14" style={{marginBottom: "-7px"}}/>
                </div>
            </div>

            <div className={"hamburger " + (fade ? "fadeIn " : "") + (showSidebar ? " active " : " ") + headerStyle} onClick={() => setShowSidebar(!showSidebar)}>
                <div className="h1"></div>
                <div className="h2"></div>
                <div className="h3"></div>
            </div>

            <div className={"sidebar" + (showSidebar ? " active" : "")}>
                <a href="/#TitlePage" onClick={() => setShowSidebar(false)}>Title</a>
                <a href="/#IntroducePage" onClick={() => setShowSidebar(false)}>Introduction</a>
                <a href="/#TimelinePage" onClick={() => setShowSidebar(false)}>Projects</a>
                <a href="/#ContactPage" onClick={() => setShowSidebar(false)}>Contact</a>
                <Github href="https://github.com/juuck14" style={{marginTop: "1.5rem"}}/>
            </div>
            <div className={"sidebarMask" + (showSidebar ? " active" : "")} onClick={() => setShowSidebar(false)}></div>
        </>
    )
}

export default Navi;