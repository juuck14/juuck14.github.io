import React from "react";
import Github from "./icon/Github";

const ContactPage = () => {
    return (
        <div id="ContactPage">
            <div className="contactTitle observee">
                <div className="contactText">
                    Contact
                </div>
                <div className="contactLine"></div>
            </div>
            <div className="contactContent observee">
                <div>jin.parkseo@gmail.com</div>
                <Github href="" target="_blank" style={{marginLeft: "1rem"}}/>
            </div>
        </div>
    )
}

export default ContactPage;