import { useEffect, useState } from 'react';

export function useCardData(url) {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        //console.error('Ocorreu um erro:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [url]);

  return cardData;
}
