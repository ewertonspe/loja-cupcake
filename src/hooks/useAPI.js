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

  }, [url]);

  return cardData;
}
