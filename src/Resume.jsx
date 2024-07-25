import React from "react";
import "./Resume.css";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <>
      <body>
        <section className="timeline" id="timeline">
          <div className="containers left-containeres">
            <a href="">
              <FontAwesomeIcon icon={faGraduationCap} />
            </a>
            <div className="text-box">
              <h2>JUSTDIAL</h2>
              <small>2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nostrum, praesentium aspernatur dicta sint repellendus
                minus officiis dolor velit iure, delectus corporis. Odio
                architecto ut numquam harum!
              </p>
              <span className="left"></span>
            </div>
          </div>
          <div className="containers right-containeres">
            <a href="">
              <FontAwesomeIcon icon={faSchool} />
            </a>
            <div className="text-box">
              <h2>Meru</h2>
              <small>2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nostrum, praesentium aspernatur dicta sint repellendus
                minus officiis dolor velit iure, delectus corporis. Odio
                architecto ut numquam harum!
              </p>
              <span className="right"></span>
            </div>
          </div>
          <div className="containers left-containeres">
            <a href="">
              <FontAwesomeIcon icon={faGraduationCap} />
            </a>
            <div className="text-box">
              <h2>KIT</h2>
              <small>2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nostrum, praesentium aspernatur dicta sint repellendus
                minus officiis dolor velit iure, delectus corporis. Odio
                architecto ut numquam harum!
              </p>
              <span className="left"></span>
            </div>
          </div>
          <div className="containers right-containeres">
            <a href="">
              <FontAwesomeIcon icon={faGraduationCap} />
            </a>
            <div className="text-box">
              <h2>NFPS</h2>
              <small>2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nostrum, praesentium aspernatur dicta sint repellendus
                minus officiis dolor velit iure, delectus corporis. Odio
                architecto ut numquam harum!
              </p>
              <span className="right"></span>
            </div>
          </div>
          <div className="containers left-containeres">
            <a href="">
              <FontAwesomeIcon icon={faGraduationCap} />
            </a>
            <div className="text-box">
              <h2>KIT</h2>
              <small>2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nostrum, praesentium aspernatur dicta sint repellendus
                minus officiis dolor velit iure, delectus corporis. Odio
                architecto ut numquam harum!
              </p>
              <span className="left"></span>
            </div>
          </div>
          <div className="containers right-containeres">
            <a href="">
              <FontAwesomeIcon icon={faGraduationCap} />
            </a>
            <div className="text-box">
              <h2>NFPS</h2>
              <small>2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nostrum, praesentium aspernatur dicta sint repellendus
                minus officiis dolor velit iure, delectus corporis. Odio
                architecto ut numquam harum!
              </p>
              <span className="right"></span>
            </div>
          </div>
        </section>
        <Skills />
      </body>
    </>
  );
}
export default Resume;
