import React from "react";
import "./Resumes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";

function Resumes() {
  return (
    <>
      <body>
        <h1 className="text-center">Resume</h1>
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
      </body>
    </>
  );
}
export default Resumes;
