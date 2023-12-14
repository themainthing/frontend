import React, { useState } from 'react';
import ApiDataFetcher from './ApiDataFetcher';
import TeamDisplay from './TeamDisplay';
import { useLocation } from 'react-router-dom';

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


  // const handleNumberGeneratedBlue = (number) => {
  //   setGeneratedNumberBlue(number);
  //   setIsDataFetchedBlue(false);
  // };

  // const handleNumberGeneratedGreen = (number) => {
  //   setGeneratedNumberGreen(number);
  //   setIsDataFetchedGreen(false);
  // };

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

  const generateNumbersForBothTeams = () => {
    const hasRemainingNumbersBlue = remainingNumbersBlue.length > 0;
    const hasRemainingNumbersGreen = remainingNumbersGreen.length > 0;

    if (hasRemainingNumbersBlue) {
      const randomIndexBlue = Math.floor(Math.random() * remainingNumbersBlue.length);
      const newRandomNumberBlue = remainingNumbersBlue[randomIndexBlue];
      setGeneratedNumberBlue(newRandomNumberBlue);
    }

    if (hasRemainingNumbersGreen) {
      const randomIndexGreen = Math.floor(Math.random() * remainingNumbersGreen.length);
      const newRandomNumberGreen = remainingNumbersGreen[randomIndexGreen];
      setGeneratedNumberGreen(newRandomNumberGreen);
    }
  };

  return (
    <div>
      <h1>Start Quiz</h1>
      <button id='button' onClick={generateNumbersForBothTeams}>Pair</button>

     
        <ApiDataFetcher
        generatedNumber={generatedNumberBlue}
        teamColor="Blue"
        onDataFetched={handleDataFetched}
      />

      

      <TeamDisplay teamColor="Blue" generatedNumber={generatedNumberBlue} apiData={apiDataBlue} />

     
      <ApiDataFetcher
        generatedNumber={generatedNumberGreen}
        teamColor="Green"
        onDataFetched={handleDataFetched}
      />

      <TeamDisplay teamColor="Green" generatedNumber={generatedNumberGreen} apiData={apiDataGreen} />
     

      
    </div>
  );
}

export default QuizUI;
