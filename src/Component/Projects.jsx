import React from "react";
import "../Component/Projects.css";
import proj from "../Assets/proj.png";

function Projects() {
  return (
    <>
      <div className="container projcon">
        <h1 className="text-center">PROJECT</h1>
        <div className="items">
          <div className="item">
            <img src={proj} alt="" className="imgWrapper" />
            <h2>Crud</h2>
            <p>Curd Operation Using Js Dom</p>
            <button>click </button>
          </div>
          <div className="item">
            <img src={proj} alt="" className="imgWrapper" />
            <h2>Weathet App</h2>
            <button>click </button>
          </div>
          <div className="item">
            <img src={proj} alt="" className="imgWrapper" />
            <h2>Netflix App</h2>
            <button>click </button>
          </div>
          <div className="item">
            <img src={proj} alt="" className="imgWrapper" />
            <h2>Web Site</h2>
            <button>click </button>
          </div>
          <div className="item">
            <img src={proj} alt="" className="imgWrapper" />
            <h2>projrct 1</h2>
            <button>click </button>
          </div>
          <div className="item">
            <img src={proj} alt="" className="imgWrapper" />
            <h2>projrct 1</h2>
            <button>click </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
