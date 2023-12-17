import React, { useState,useEffect  } from 'react';
import TeamDisplay from './TeamDisplay';
import { useLocation} from 'react-router-dom';

function QuizUI() {
  const location = useLocation();
  const { greenPid, bluePid, memberdataB, memberdataG } = location.state;
  const [generatedNumberBlue, setGeneratedNumberBlue] = useState(null);
  const [generatedNumberGreen, setGeneratedNumberGreen] = useState(null);
  const [remainingNumbersBlue, setRemainingNumbersBlue] = useState(bluePid); 
  const [remainingNumbersGreen, setRemainingNumbersGreen] = useState(greenPid); 
  const [apiDataBlue, setApiDataBlue] = useState(null);
  const [apiDataGreen, setApiDataGreen] = useState(null);
  const [isDataFetchedBlue, setIsDataFetchedBlue] = useState(false);
  const [isDataFetchedGreen, setIsDataFetchedGreen] = useState(false);



  useEffect(() => {
    const fetchData = async (number, setApiData, teamColor) => {
      try {
        const response = await fetch(`http://34.118.76.224:8080/RepApp/members?id=${number}`);
        const data = await response.json();
        handleDataFetched(data, teamColor);
      } catch (error) {
        console.error(`Error fetching data for ${number}:`, error);
      }
    };

    if (generatedNumberBlue && isDataFetchedBlue === false) {
      fetchData(generatedNumberBlue, setApiDataBlue, 'Blue');
     
    }

    if (generatedNumberGreen  && isDataFetchedGreen === false) {
      fetchData(generatedNumberGreen, setApiDataGreen, 'Green');
     
    }
  }, [generatedNumberBlue, generatedNumberGreen, apiDataBlue, apiDataGreen, isDataFetchedBlue, isDataFetchedGreen]);



  const generateNumbersForBothTeams = () => {
    const hasRemainingNumbersBlue = remainingNumbersBlue.length > 0;
    const hasRemainingNumbersGreen = remainingNumbersGreen.length > 0;

    if (hasRemainingNumbersBlue) {
      const randomIndexBlue = Math.floor(Math.random() * remainingNumbersBlue.length);
      const newRandomNumberBlue = remainingNumbersBlue[randomIndexBlue];
      setGeneratedNumberBlue(newRandomNumberBlue);
      setIsDataFetchedBlue(false);
    }

    if (hasRemainingNumbersGreen) {
      const randomIndexGreen = Math.floor(Math.random() * remainingNumbersGreen.length);
      const newRandomNumberGreen = remainingNumbersGreen[randomIndexGreen];
      setGeneratedNumberGreen(newRandomNumberGreen);
      setIsDataFetchedGreen(false);
    }
  };
  

  const handleDataFetched = (data, teamColor) => {
    if (teamColor === 'Blue') {
      setApiDataBlue(data);
      setRemainingNumbersBlue((prevNumbers) => prevNumbers.filter((num) => num !== generatedNumberBlue));
      setIsDataFetchedBlue(true);
    } else if (teamColor === 'Green') {
      setApiDataGreen(data);
      setRemainingNumbersGreen((prevNumbers) => prevNumbers.filter((num) => num !== generatedNumberGreen));
      setIsDataFetchedGreen(true);
    }
  };


  return (
    <div>
      <h1>Start Quiz</h1>
      <button id='button' onClick={generateNumbersForBothTeams}>Pair</button>


      

      <TeamDisplay teamColor="Blue" generatedNumber={generatedNumberBlue} apiData={apiDataBlue} />



      <TeamDisplay teamColor="Green" generatedNumber={generatedNumberGreen} apiData={apiDataGreen} />
     

      
    </div>
  );
}

export default QuizUI;
