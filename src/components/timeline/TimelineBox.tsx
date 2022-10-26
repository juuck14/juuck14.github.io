import Project from "interface/Project";
import React, { useRef } from "react";
import { useState } from "react";
import styled from 'styled-components';
import TimelineBoxDescription from "./TimelineBoxDescription";

type TimelineBoxProps = {
    project: Project;
    index: number;
};

const TimelineBox: React.FC<TimelineBoxProps> = ({project, index}) => {

    const ImageStyleRef = useRef(styled.div`
        background: url(${project.image}) no-repeat;
    `);
    const ImageStyle = ImageStyleRef.current

    const [showContent, setShowContent] : [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

    return (
        <div id={"timeline" + index} className="timelineBox timelineObservee">
            <ImageStyle className="timelineBoxImages" onClick={() => setShowContent(!showContent)} >
                <TimelineBoxDescription project={project} inside={true} skillObserve={false} showContent={showContent} />
                <div className={"timelineBoxImageMask" + (showContent ? " active" : "")}></div>
            </ImageStyle>
            <TimelineBoxDescription project={project} />
            
        </div>
    );
};

export default TimelineBox;
