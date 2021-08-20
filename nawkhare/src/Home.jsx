import React from "react";
import web from "../src/imges/technical.jpeg";
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        name=" Grow your business"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
