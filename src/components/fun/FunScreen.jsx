import React from "react";
import "../fun/FunScreen.css";
import smoke from "../fun/smoke.mp4";

const FunScreen = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="fun">
      <section className="smoke-section">
        <video src={smoke} autoPlay muted></video>
        <h1 className="smoke-title">
          <span>S</span>
          <span>U</span>
          <span>D</span>
          <span>H</span>
          <span>A</span>
          <span>K</span>
          <span>A</span>
          <span>R</span>
        </h1>
      </section>
      <button className="button fbtn" onClick={reloadPage}>Fn + F5</button>
    </div>
  );
};

export default FunScreen;
