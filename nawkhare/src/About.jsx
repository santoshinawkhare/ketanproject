import React from "react";
import web from "../src/imges/sIndustry.jpeg";
import Common from "./Common";

function About() {
  return (
    <>
      <Common
        name=" Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}

export default About;
