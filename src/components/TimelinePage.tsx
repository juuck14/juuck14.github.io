import React from "react";
import TimelineBar from "./timeline/TimelineBar";
import TimelineBox from "./timeline/TimelineBox";
import Project from "interface/Project";


const TimelinePage = () => {
    const projects: Project[] = [
        { 
            title: "PET SIGNAL",
            period: "2021.02 ~ 2021.07",
            content: "반려동물 전용 쇼핑몰 어플입니다. SQL을 이용하여 데이터베이스에서 정보를 읽어와 화면에 적용하는 작업, Vue.js와 JS를 이용하여 사용자 인터페이스 기능을 개발하는 작업 등을 개발했습니다.",
            image: require("resources/images/petsignal_1.jpg"),
            skills: ["CSS", "VUEJS", "RESTAPI"],
            link: "",
            githubLink: ""
        },
        { 
            title: "GREEN JACKET",
            period: "2021.03 ~ 2021.06",
            content: "골퍼와 캐디를 위한 온라인 결제 및 정산 어플입니다. QR코드 스캔을 이용한 서비스 결제 기능, 다수의 사람이 함께 결제할 수 있는 분할결제 기능, 카카오맵 API를 통해 골프장을 검색하는 기능 등을 개발했습니다.",
            image: require("resources/images/greenjacket_1.jpg"),
            skills: ["CSS", "VUEJS", "RESTAPI"],
            link: "https://service.greenjacket.co.kr/m/common/login/login.page",
            githubLink: ""
        },
        { 
            title: "한국어교원 홈페이지",
            period: "2021.12 ~",
            content: "국립국어원 한국어교원 홈페이지 고도화 프로젝트입니다. 주로 Java와 Jsp를 이용한 백엔드 작업, 페이지 개발 작업을 진행했습니다.",
            image: require("resources/images/kteacher.png"),
            skills: ["JAVA", "SPRING", "BOOTSTRAP"],
            link: "https://kteacher.korean.go.kr/",
            githubLink: ""
        },
        { 
            title: "PET GALLERY",
            period: "2022.01 ~ 2021.02",
            content: "React를 활용한 간단한 갤러리 프로젝트입니다. React, Redux, Next.js, Styled-Components, React-bootstrap 등을 활용하여 개발했습니다.",
            image: require("resources/images/petgallery.png"),
            skills: ["REACT", "REDUX"],
            link: "https://silly-bohr-dffda3.netlify.app",
            githubLink: "https://github.com/juuck14/gallery"
        },
        { 
            title: "메이플 보스 분배금 계산기",
            period: "2022.02 ~ 2022.04",
            content: "제가 쓰려고 만든 메이플스토리 보스 분배금 계산기입니다. BOOTSTRAP, Vue.js를 사용해 만들었습니다. 원래 배포용으로 만들어서 디자인과 설명 등에 신경을 썼지만 그냥 배포하지 않고 저만 쓰고 있습니다.",
            image: require("resources/images/distribute.png"),
            skills: ["VUEJS", "BOOTSTRAP"],
            link: "https://sharp-shaw-6849ac.netlify.app",
            githubLink: "https://github.com/juuck14/distribute"
        }
    ];

    return (
        <div id="TimelinePage">
            <div className="timelineTitle">Projects</div>
            <TimelineBar projects={projects} />
            {projects.map((project: Project, index: number) => (
                <>
                    <div className={(index === 0? "" : "timelineObservee ") + "timelineGap"}></div>
                    <TimelineBox project={project} index={index} />
                    <div className={(index === projects.length - 1? "" : "timelineObservee ") + "timelineGap"}></div>
                </>
            ))}
        </div>
    );
};

export default TimelinePage;
