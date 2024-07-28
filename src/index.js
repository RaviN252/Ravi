import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Size from "./size";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Home from "./Home";
import Proj from "./Proj";

import Nav from "./Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      {/* <Size /> */}

      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Resume" element={<Resume />}></Route>
        <Route path="/Proj" element={<Proj />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

reportWebVitals();
