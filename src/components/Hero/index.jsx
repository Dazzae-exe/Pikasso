import React from "react";

function Hero() {
  return (
    <div className="landing-box">
      <figure className="landing-figure">
        <img
          src="https://images.unsplash.com/photo-1618005479492-bc36dc8aeaf2?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="unsplash image"
          className="landing-img"
        />
      </figure>

      <h1>Discover better inspiration for your daily routine</h1>
      <p>with images...</p>

      <button className="landing-btn">Join now</button>
    </div>
  );
}

export default Hero;
