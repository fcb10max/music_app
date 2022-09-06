import { useEffect, useState } from "react";

const useDataFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      headers: {
        "Access-Control-Request-Origin": `*`,
      }
    })
      .then((response) => response.json())
      .then((obj) => {
        if (!obj.success) throw new Error(obj.message);
        setData(obj.data);
      })
      .catch((error) =>
        setError(error)
      )
      .finally(() => setLoading(false));
  }, [url]);
  return { data, error, loading };
};

export default useDataFetch;
