import React from "react";
import useFetch from "../hooks/useFetch";
import { StrapiInstance } from "../lib/axios/StrapiConfig";
import Cookies from "js-cookie";

const UserContext = React.createContext("");

function UserProvider({ children }) {
  // States w/ useEffects
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const getProfile = async () => {
        StrapiInstance.get(`/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => setUser(response))
          .catch((error) => console.error(error));
      };

      getProfile();
    }

    return () => {
      return AbortSignal.abort();
    };
  }, []);

  // Fetching
  const explorePhotosFree = useFetch(`/photos`, {
    params: { order_by: "popular", per_page: 30 },
  });

  const explorePhotosUser = useFetch(`/photos`, {
    params: { order_by: "popular", per_page: 30 },
  });

  // Authorization
  const loginRequest = async (username, password) => {
    const response = await StrapiInstance.post("/auth/local", {
      identifier: username,
      password: password,
    })
      .then((response) => {
        const token = response.data.jwt;

        Cookies.set("token", token, { expires: 1 });
      })
      .catch((error) => console.error("An error occurred: ", error));

    return response;
  };

  const registerRequest = async (username, password, email) => {
    const response = await StrapiInstance.post("/auth/local", {
      username: username,
      email: email,
      password: password,
    })
      .then((response) => {
        const token = response.data.jwt;

        Cookies.set("token", token, { expires: 1 });
      })
      .catch((error) => console.error("An error occurred: ", error));

    return response;
  };

  return (
    <UserContext.Provider
      value={{
        explorePhotosFree,
        loginRequest,
        registerRequest,
        user,
        explorePhotosUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
