import React from "react";
import "../../styles/Gallery/index.css";
import { UserContext } from "../../Context";

function Gallery() {
  const { explorePhotosFree, explorePhotosUser, user } =
    React.useContext(UserContext);

  return (
    <div className="gallery-root">
      {!user &&
        explorePhotosFree?.fetchItems?.map((items) => (
          <figure
            className={`gallery-card ${
              items.height >= 8000 ? "card-large" : ""
            } ${items.height >= 5000 ? "card-normal" : ""} ${
              items.height >= 3000 ? "card-small" : ""
            }`}
            key={items.slug}
          >
            <img
              src={items?.urls?.regular}
              alt="images"
              className="card-image"
              loading="lazy"
            />
          </figure>
        ))}
 
      {user &&
        explorePhotosUser?.fetchItems?.map((items) => (
          <figure
            className={`gallery-card ${
              items.height >= 8000 ? "card-large" : ""
            } ${items.height >= 5000 ? "card-normal" : ""} ${
              items.height >= 3000 ? "card-small" : ""
            }`}
            key={items.slug}
          >
            <img
              src={items?.urls?.regular}
              alt="images"
              className="card-image"
              loading="lazy"
            />
          </figure>
        ))}
    </div>
  );
}

export default Gallery;
