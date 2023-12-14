import React, { useEffect } from 'react';

const ApiDataFetcher = ({ generatedNumber, teamColor, onDataFetched }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://34.118.96.12:8080/RepApp/members?id=${generatedNumber}`);
        const data = await response.json();
        onDataFetched(data, teamColor);
      } catch (error) {
        console.error(`Error fetching ${teamColor} Team data:`, error);
      }
    };

    if (generatedNumber !== null) {
      fetchData();
    }
   
  }, [generatedNumber, teamColor, onDataFetched]);

  return null;
};

export default ApiDataFetcher;
