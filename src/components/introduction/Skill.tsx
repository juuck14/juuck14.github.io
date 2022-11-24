import React, { memo } from "react";
import styled, { CSSProperties } from 'styled-components';

type SkillProps = {
    text: string;
    style?: CSSProperties;
    index: number;
};

const Skill: React.FC<SkillProps> = ({text, style={fontSize: "1.5rem", marginRight: "1rem", padding: "0.5rem 1rem"}, index}) => {

    interface SkillInterface {
        delay: number;
        style: CSSProperties;
    }

    const SkillStyle = styled.div<SkillInterface>`
        transition: ${(props: SkillInterface) => `color 0.35s, opacity 0.35s ease ${props.delay}s, transform 0.35s ease ${props.delay}s`};
        font-size: ${(props: SkillInterface) => `${props.style.fontSize}`};
        margin-right: ${(props: SkillInterface) => `${props.style.marginRight}`};
        padding: ${(props: SkillInterface) => `${props.style.padding}`};
    `;

    return (
        <SkillStyle className="skill" delay={index/20} style={style}>
            <div className="skillText">{text}</div>
            <div className="thirdPseudo"></div>
        </SkillStyle>
    )
}

export default memo(Skill);
