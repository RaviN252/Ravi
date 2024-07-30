import React from "react";
import Resumes from "./Component/Resumes";
import Skills from "./Component/Skills";
import Nav from "./Component/Nav";
import Content from "./Component/Content";
import Banner from "./Component/Banner";

import Projects from "./Component/Projects";
import Connect from "./Component/Connect";

function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Content />
      <Resumes />
      <Skills />
      <Projects />
      <Connect />
    </>
  );
}
export default Home;
