import { useState, useEffect } from "react";

export function useFetch(url, count) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({
    msg: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        data.splice(count);
        setData((prev) => [prev, ...data]);
        console.log(data);
      })
      .catch((err) => {
        setError({
          msg: `Ooops. There was a problem with the Fetch operation: ${err}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, count]);
  return { data, isLoading, error };
}
