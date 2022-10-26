import React, { useEffect, useState } from "react";

const TimelineBar = ({projects}: any) => {
    const [showTimeline, setShowTimeline] : [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    useEffect(() => {
        if(showTimeline) document.getElementById("TimelineToggle")?.classList.remove("mobileActive")
        else document.getElementById("TimelineToggle")?.classList.add("mobileActive")
    }, [showTimeline])

    return (
        <>
            <div id="TimelineToggle" onClick={() => setShowTimeline(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330">
                    <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
                </svg>
            </div>
            <div id="TimelineBar" className={"timelineBarArea " + (showTimeline ? "mobileActive" : "")} onClick={() => setShowTimeline(false)}>
                <ul className="timelineBarArea">
                    {projects.map(({title}: any, index: number) => (
                        <li id={"timeline" + index + "link"} className="timelineBarElement">
                            <a href={"/#timeline" + index} className="timelineBarText" onClick={() => setShowTimeline(false)}>{title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="TimelineBarBackground" onClick={() => setShowTimeline(false)} className={showTimeline ? "active" : ""}></div>
        </>
    );
};

export default TimelineBar;
