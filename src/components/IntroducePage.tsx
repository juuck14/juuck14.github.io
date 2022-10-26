import React from "react";
import Skill from "./introduction/Skill"

const IntroducePage = () => {
    const skills : string[] = ["HTML", "CSS", "REACT", "VUE.JS", "JSP", "JAVA", "SQL", "PYTHON"]
    return (
        <div id="IntroducePage">
            <div className="about observee">
                <div className="aboutTitle">ABOUT</div>
                <div className="aboutContent">
                    프론트엔드 개발자이지만 필요하면 백엔드도 하는 개발자 박서진입니다. 연세대학교에 응용통계학과로 입학했지만 개발에 관심이 생겨 휴학 후 웹 개발 공부를 하고 산업기능요원으로 근무중입니다. 
                </div>
            </div>
            <div className="skills observee">
                <div className="skillTitle">Skills</div>
                <div className="skillContent">
                    {skills.map((skill: string, index: number) => (
                        <Skill text={skill} index={index}></Skill>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IntroducePage;
