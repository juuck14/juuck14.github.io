import React from "react";


const TitlePage = ({animationEnd} : any) => {
    return (
        <div id="TitlePage">
            <div className="titleBox">
                <div className="title title1">
                    <div className="titleText">안녕하세요.</div>
                    <div className="box"></div>
                    <div className="bar"></div>
                </div>
                <div className="title title2" onAnimationEnd={animationEnd}>
                    <div className="titleText">개발자 박서진입니다.</div>
                    <div className="box"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    )
}

export default TitlePage;