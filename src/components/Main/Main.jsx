import React from "react";
import "./Main.css";
import imgs from './amico.png'

const Main = () => {
  return (
    <div className="home">
      <div className="right">
        <h2>Work at the speed of thought</h2>
        <p>
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <button className="btns">Get started</button>
        <a href="#">Watch the Video</a>
      </div>
      <div className="left"><img src={imgs} alt="" /></div>
    </div>
  );
};

export default Main;
