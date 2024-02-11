import React from "react";
import { axiosInstance } from "../lib/axios/AxiosConfig";

function useFetch(url, params) {
  const [fetchItems, setFetchItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axiosInstance
      .get(url, params)
      .then((fetchItem) =>
        !fetchItem ? setFetchItems(fetchItem) : setFetchItems(fetchItem.data)
      )
      .catch((err) => setFetchItems(err))
      .finally(setIsLoading(false));
  }, []);

  return { fetchItems, isLoading };
}

export default useFetch;
