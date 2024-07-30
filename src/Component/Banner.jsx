import React from "react";
import "./Banner.css";
import Ravi from "../Assets/ravi3.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Banner() {
  const [text] = useTypewriter({
    words: [
      " FULL STACK DEVELOPER !",
      " MERN STACK DEVELOPER !",
      " PHOTOGRAPHER !",
      " DESIGNER !",
      " PUBLIC SPEAKER !",
    ],
    loop: true,
  });

  const handleClick = (event) => {
    event.preventDefault();
    const resumeUrl =
      "https://drive.google.com/uc?export=download&id=1BNqN8NZhHLXeKdTtL3NE0f53zr1DQ0HN";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "My_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="imgWrapper">
            <img src={Ravi} alt="" />
          </div>
          <div className="contentWrapper">
            <div className="content">
              <span className="textWrapper">
                <h4>—— RAVI N</h4>
              </span>

              <h1>
                I'M A
                <span style={{ fontWeight: "bold", color: "blue" }}>
                  {text}
                </span>
                <span>
                  <Cursor />
                </span>
              </h1>

              <p>
                "As a passionate MERN stack developer, I thrive on crafting
                cutting-edge web solutions with React, Node.js, and MongoDB. I'm
                eager to collaborate on transformative projects that push the
                limits of technology. Let's create extraordinary digital
                experiences together!"
              </p>
              <a href="#" onClick={handleClick}>
                MY CV
              </a>

              <div className="icons" id="icons">
                <a href="https://www.linkedin.com/in/ravi-mern-reactjs-nodejs/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.instagram.com/vr_ravi_7_10_46/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://wa.me/9686595916">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
