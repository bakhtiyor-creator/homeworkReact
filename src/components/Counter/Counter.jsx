import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isLogin, setisLogin] = useState(false);

  const bntPlus = () => {
    setCounter(counter + 1);
  };

  const btnMinus = () => {
    setCounter(counter - 1);
  };

  const btnNul = () => {
    setCounter(0);
  };

  const isToogle = () => {
    setisLogin(isLogin => !isLogin)
  };

  return (
    <div>
      <h1 className="text-center">{counter}</h1>
      <div className="btns d-flex justify-content-center">
        <button className="btn btn-success" onClick={bntPlus}>
          +
        </button>
        <button className="btn btn-danger mx-2" onClick={btnMinus}>
          -
        </button>
        <button className="btn btn-dark" onClick={btnNul}>
          0
        </button>
      </div>
      {isLogin ? <h1 className="text-center mt-5">True</h1> : null}

      <button className="btn btn-outline-primary w-50 d-block mx-auto mt-5 " onClick={isToogle}>
        Onclick
      </button>
    </div>
  );
};

export default Counter;
