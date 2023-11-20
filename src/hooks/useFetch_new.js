import { useEffect, useState } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [id, setId] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error] = useState(false);
  
  const [parametros, setParametros] = useState(null);

  const httpRequest = (data, method, id) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod("POST");

    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      setMethod("DELETE");
      setId(id);

    } else if (method === "GET") {
      setConfig({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod("GET");
      setParametros(data);
      setId(id);
      
    } else if (method === "PUT") {
      setConfig({
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod("PUT");
      setId(id);
    }

  };

  useEffect(() => {
    const Request = async () => {
      if (method === "POST") {
        setLoading(true);
        try {
          let fetchOptions = [url, config];
          const res = await fetch(...fetchOptions);
          console.log(res.status)
          setData('OK')
        } catch (error) {
          console.log(error)
        }
        
      } else if (method === "DELETE") {
        setLoading(true);
        try {
          const res = await fetch(url + '/' + id, config);
          console.log(res.status)
          setData('OK')
          //setData(json);
        } catch (error) {
          console.log(error)
        }
      } else if (method === "GET") {
        setLoading(true);
        try {
          const searchParams = new URLSearchParams(parametros)
          let res
          id ? res = await fetch(url + '/' + id , config): res = await fetch(url + '?' + searchParams, config)
          const json = await res.json();
          setData(json);
        } catch (error) {
          console.log(error)
        }
      } else if (method === "PUT") {
        setLoading(true);
        try {
          const res = await fetch(url + '/' + id, config);
          console.log(res.status)
          setData('OK')
          //setData(json);
        } catch (error) {
          console.log(error)
        }
      } 
    };

    Request();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);
  

  return { data, httpRequest, loading, error };
};