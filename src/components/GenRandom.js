// import React, { useState } from 'react';

// const GenRandom = ({ numberSet, onNumberGenerated }) => {
//   const [randomNumber, setRandomNumber] = useState(null);

//   const generateRandomNumber = () => {
//     const randomIndex = Math.floor(Math.random() * numberSet.length);
//     const newRandomNumber = numberSet[randomIndex];
//     setRandomNumber(newRandomNumber);

 
//     if (onNumberGenerated) {
//       onNumberGenerated(newRandomNumber);
//     }
//   };

//   return (
//     <div>
//       <p>Single Random Number from genRandom: {randomNumber}</p>
//     </div>
//   );
// };

// export default GenRandom;
