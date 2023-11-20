import { useEffect, useState } from 'react';

export function useFetch(url,method,params) {
  const [dados, setDados] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      let URL = url
      //const searchParams = new URLSearchParams(params)
      if(method === 'GET'){
        
        try {
          if(params){
            URL += '?';
            URL += new URLSearchParams(params);
          }
          const response = await fetch(URL);
          const json = await response.json();
          setDados(json);
        } catch (error) {
          console.log(error)
        }
      }
      if(method === 'PUT'){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React PUT Request Example' })
        };

        try {
          const response = await fetch(url,requestOptions);
          const json = await response.json();
          setDados(json);
        } catch (error) {
          console.log(error)
        }
      }
    };

    fetchData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method]);

  return dados;
}
