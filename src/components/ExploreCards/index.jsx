import React from "react";
import "../../styles/ExploreCards/index.css";

function ExploreCards() {
  return (
    <div className="exploreCards-grid">
      <div className="exploreCards-gridCard">
        <span style={{ fontSize: "36px" }}>💳</span>
        <h3>Free to use</h3>
        <p>
          Pikasso is completely free to use for your inspiration. You only need an account to enjoy the features completely.
        </p>
      </div>
      <div className="exploreCards-gridCard">
        <span style={{ fontSize: "36px" }}>🙋🏽‍♂️</span>
        <h3>Connect</h3>
        <p>Open new ways making contacts with same taste of likes than you.</p>
      </div>
      <div className="exploreCards-gridCard">
        <span style={{ fontSize: "36px" }}>🖼️</span>
        <h3>Create</h3>
        <p>
          Sign up and create beautiful moodboards, collage, bussines ideas,
          etc...
        </p>
      </div>
      <div className="exploreCards-gridCard">
        <span style={{ fontSize: "36px" }}>🧑🏻‍💻</span>
        <h3>Demo</h3>
        <p>
          This is the most popular images to watch these days. Sign up and enjoy
          more images for your inspiration.
        </p>
      </div>
    </div>
  );
}

export default ExploreCards;
