import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span size={"3rem"}>sudhakars0512@gmail.com</span>
        {/* <div className="f-icons">
          <Insta color="white" size={"2rem"} />
          <Facebook color="white" size={"2rem"} />
          <Gitub color="white" size={"2rem"} />
        </div> */}
        <div className="f-icons">
          <a
            href="https://github.com/Sudhakar0512"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gitub color="white" size={"2rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/sudhakar-s-37183a237"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook color="white" size={"2rem"} />
          </a>
          <a
            href="https://instagram.com/sudhakars_skr_?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size={"2rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
