import { useEffect, useRef, useState } from 'react';

export function useIntervalFetch(url, interval) {
  const [data, setData] = useState(null);
  const dataRef = useRef(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        dataRef.current = jsonData;
        setData(jsonData);
      } catch (error) {
        console.error('Ocorreu um erro:', error);
      }
    };

    fetchData(); // Executa a função fetchData inicialmente

    const intervalId = setInterval(fetchData, interval);

    return () => {
      clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado
    };
  }, [url, interval]);
  

  return dataRef;
}
