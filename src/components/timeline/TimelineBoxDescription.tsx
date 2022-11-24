import Github from "components/icon/Github";
import Link from "components/icon/Link";
import Skill from "components/introduction/Skill";
import Project from "interface/Project";
import React from "react";

type TimelineBoxDescriptionProps = {
    project: Project;
    inside?: boolean;
    skillObserve?: boolean;
    showContent?: boolean;
};

const TimelineBoxDescription: React.FC<TimelineBoxDescriptionProps> = ({project, inside=false, skillObserve=true, showContent=false}) => {
    return (
        <div className={"timelineBoxDescription" + (inside ? " inside" : "") + (showContent ? " active" : "")}>
            <div className="timelineBoxTitle">
                {project.title}
            </div>
            <div className="timelineBoxPeriod">
                {project.period}
            </div>
            <div className="timelineBoxContent">
                {project.content}
            </div>
            <div className={"skills" + (skillObserve ? " observee" : " active")}>
                <div className="skillContent">
                    {project.skills.map((skill, index) => (
                        <Skill text={skill} index={index} style={{fontSize: "0.9rem", padding: "0.3rem 0.6rem"}}/>
                    ))}
                </div>
            </div>
            <div className="timelineBoxLink">
                {project.link ? <Link href={project.link} target="_blank"/> : <></>}
                {project.githubLink ? <Github href={project.githubLink} target="_blank" style={{marginLeft: "1rem"}}/> : <></>}
            </div>
        </div>
    );
};

export default TimelineBoxDescription;
