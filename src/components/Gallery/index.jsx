import React from "react";
import "../../styles/Gallery/index.css";
import { UserContext } from "../../Context";

function Gallery() {
  const { explorePhotosFree } = React.useContext(UserContext);

  return (
    <div className="gallery-root">
      {!explorePhotosFree.isLoading ? (
        explorePhotosFree?.fetchItems?.map((items) => (
          <figure
            className={`gallery-card ${
              items.height >= 8000 ? "card-large" : ""
            } ${items.height >= 5000 ? "card-normal" : ""} ${
              items.height >= 3000 ? "card-small" : ""
            }`}
            key={items.id}
          >
            <img
              src={items?.urls?.regular}
              alt="images"
              className="card-image"
              loading="lazy"
            />
          </figure>
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default Gallery;
