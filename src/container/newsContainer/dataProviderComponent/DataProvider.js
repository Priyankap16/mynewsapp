import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();



export const DataProvider = (props) => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c4b00750e80b474e877cdaaa8b960a57');
        const data = await response.json();
        setData(data?.articles[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  
  }, []);


  return (
    <DataContext.Provider value={data}>
      {props.children}
    </DataContext.Provider>
  );
};
