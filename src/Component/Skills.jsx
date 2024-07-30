import React from "react";
import "./Skill.css";

function Skills() {
  return (
    <>
      <h1 className="text-center" id="head">
        MY SKILLS
      </h1>
      <div className="container">
        <div className="row">
          <div className="skill">
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

          <div class="Circle">
            <div class="Cskill">
              <div class="outer">
                <div class="inner">
                  <div class="number">
                    <h5>55%</h5>
                    <h6>Public Speaking</h6>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient
                    id="GradientColor"
                    gradientTransform="rotate(135)"
                  >
                    <stop offset="0%" stop-color="rgb(50, 4, 252)" />
                    <stop offset="100%" stop-color="rgb(4, 238, 247)" />
                  </linearGradient>
                </defs>
                <circle
                  class="public-speaking"
                  cx="80"
                  cy="80"
                  r="70"
                  stroke-linecap="round"
                  stroke="url(#GradientColor)"
                />
              </svg>
            </div>

            <div class="Cskill">
              <div class="outer">
                <div class="inner">
                  <div class="number">
                    <h5>90%</h5>
                    <h6>Team Work</h6>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient
                    id="GradientColor"
                    gradientTransform="rotate(135)"
                  >
                    <stop offset="0%" stop-color="rgb(50, 4, 252)" />
                    <stop offset="100%" stop-color="rgb(4, 238, 247)" />
                  </linearGradient>
                </defs>
                <circle
                  class="team-work"
                  cx="80"
                  cy="80"
                  r="70"
                  stroke-linecap="round"
                  stroke="url(#GradientColor)"
                />
              </svg>
            </div>

            <div class="Cskill">
              <div class="outer">
                <div class="inner">
                  <div class="number">
                    <h5>85%</h5>
                    <h6>Full Stack</h6>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient
                    id="GradientColor"
                    gradientTransform="rotate(135)"
                  >
                    <stop offset="0%" stop-color="rgb(50, 4, 252)" />
                    <stop offset="100%" stop-color="rgb(4, 238, 247)" />
                  </linearGradient>
                </defs>
                <circle
                  class="full-stack"
                  cx="80"
                  cy="80"
                  r="70"
                  stroke-linecap="round"
                  stroke="url(#GradientColor)"
                />
              </svg>
            </div>

            <div class="Cskill">
              <div class="outer">
                <div class="inner">
                  <div class="number">
                    <h5>75%</h5>
                    <h6>Development</h6>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient
                    id="GradientColor"
                    gradientTransform="rotate(135)"
                  >
                    <stop offset="0%" stop-color="rgb(50, 4, 252)" />
                    <stop offset="100%" stop-color="rgb(4, 238, 247)" />
                  </linearGradient>
                </defs>
                <circle
                  class="development"
                  cx="80"
                  cy="80"
                  r="70"
                  stroke-linecap="round"
                  stroke="url(#GradientColor)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
