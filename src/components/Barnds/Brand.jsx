import React from "react";
import "./Barnds.css";
import logos from "./icon.svg";

const Brand = () => {
  return (
    <div className="brads">
      <h1 className="title">Product was Built Specifically for You</h1>
      <div className="cards">
        <div className="div">
          <img src={logos} alt="" />
          <h5>First click tests</h5>
          <p>While most people enjoy <br /> casino gambling,</p>
        </div>
        <div className="div">
          <img src={logos} alt="" />
          <h5>First click tests</h5>
          <p>While most people enjoy <br /> casino gambling,</p>
        </div>
        <div className="div">
          <img src={logos} alt="" />
          <h5>First click tests</h5>
          <p>While most people enjoy <br /> casino gambling,</p>
        </div>
        <div className="div">
          <img src={logos} alt="" />
          <h5>First click tests</h5>
          <p>While most people enjoy <br /> casino gambling,</p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
