import React from "react";
import "./Skill.css";

function Skills() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="skill">
            <h1> MY SKILLS</h1>
            <li>
              <h3>HTML</h3>
              <span className="bar">
                <span className="html"> </span>
              </span>
            </li>
            <li>
              <h3>CSS</h3>
              <span className="bar">
                <span className="css"> </span>
              </span>
            </li>
            <li>
              <h3>JavaScript</h3>
              <span className="bar">
                <span className="js"> </span>
              </span>
            </li>
            <li>
              <h3>MERN</h3>
              <span className="bar">
                <span className="mern"> </span>
              </span>
            </li>
          </div>

          {/* this is for circularbaar */}
          <div className="Circle">
            <div className="content">
              <div
                className="progress"
                style={{ "--i": 85, "--clr": "#43f94a" }}
              >
                <h3>85%</h3>
                <h5>Developement</h5>
              </div>
              <div
                className="progress"
                style={{ "--i": 95, "--clr": "#43f94a" }}
              >
                <h3>95%</h3>
                <h5>Communicati</h5>
              </div>
              <div
                className="progress"
                style={{ "--i": 75, "--clr": "#43f94a" }}
              >
                <h3>75%</h3>
                <h5>Public Speking</h5>
              </div>
              <div
                className="progress"
                style={{ "--i": 85, "--clr": "#43f94a" }}
              >
                <h3>85%</h3>
                <h5>Photography</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
