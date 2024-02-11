import React from "react";
import useFetch from "../hooks/useFetch";
import { StrapiInstance } from "../lib/axios/StrapiConfig";
import Cookies from "js-cookie";

const UserContext = React.createContext("");

function UserProvider({ children }) {
  // States
  const [user, setUser] = React.useState({});

  // Fetching
  const explorePhotosFree = useFetch(`/photos`, {
    params: { order_by: "popular", per_page: 30 },
  });

  // Authorization
  const loginRequest = async (username, password) => {
    const response = await StrapiInstance.post("/auth/local", {
      identifier: username,
      password: password,
    })
      .then((response) => {
        console.log("Well done! you're online");
        const token = response.data.jwt;
        setUser(response.data.user);

        Cookies.set("token", token, { expires: 1 });
        console.log(Cookies.get());
      })
      .catch((error) => console.error("An error occurred: ", error));

    return response;
  };

  return (
    <UserContext.Provider value={{ explorePhotosFree, loginRequest, user }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
