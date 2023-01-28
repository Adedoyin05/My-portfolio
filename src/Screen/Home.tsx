import React from "react";
import "./home.css";
// import Skills from "./Skills";
import Typist from "react-typist";
const Home = () => {
  return (
    <>
      <div className="containerDiv">
        <Typist cursor={{ hideWhenDone: true, show: false }} startDelay={3}>
          <h1 className="heroText">I'm Adebajo Adedoyin</h1>
        </Typist>
        <Typist cursor={{ hideWhenDone: true, show: false }}>
          <Typist.Delay ms={2000} />
          <p className="text-3xl text-white">A Front-end Developer </p>
        </Typist>
      </div>
      <div className="container mx-auto about" style={{ color: "#f2bc94" }}>
        <h3 className="text-2xl font-bold">Get to Know Me</h3>
        <p>
          I am a proficient Frontend Engineer with core knowledge on building responsive web
          applications.  Gradually learning to become a tech
          entrepreneur, I enjoy meeting new people with diverse peronalities.
          If i am to introduce myself in 7 words,
          It will be Responsible, creative, open-minded, friendly and ambitious web developer.
          This is how I see myself, and hope you will give me a chance to prove my words.{" "}
        </p>
      </div>
    </>
  );
};
export default Home;
