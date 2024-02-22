import React from "react";
import ExploreCards from "../../components/ExploreCards";
import { UserContext } from "../../Context";
import Gallery from "../../components/Gallery";

function Explore() {
  const { user } = React.useContext(UserContext);

  return (
    <>
    {!user ? <ExploreCards /> : ""}
      <Gallery />
    </>
  );
}

export default Explore;
