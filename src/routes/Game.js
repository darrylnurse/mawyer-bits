import Box from "../components/Box";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Game(){

  const cards = 5;

  function padZero(string = ""){

    while (string.length < cards){
      string = "0" + string;
    }

    return string;
  }

  function convertBinary(number){
    let binArray = [];
    while (number !== 0){
      binArray.unshift((number % 2).toString());
      number = Math.floor(number/ 2);
    }

    return padZero(binArray.join(''));
  }

  let powersTwo = [];

  for(let i = 0; i < cards; i++){
    powersTwo.push(Math.pow(2, i));
  }

  let cardObject = {};
  for(const power of powersTwo) cardObject[power] = [];

  //loop over powersTwo and populate an object with each value as a key;

  const rangeEnd = powersTwo.reduce((accumulator, power) => accumulator + power, 0);

  let allNumbers = [];

  for(let i = 1; i <= rangeEnd; i++){
    allNumbers.push(i);
  }

  //set for powers for each number
  //for each number, check if it has() the power
  //copy value into card object

  for(const number of allNumbers){
    const binary = convertBinary(number);
    for(let i = 0; i < binary.length; i++){
      if(binary[i] === "1") cardObject[powersTwo[powersTwo.length - i - 1]].push(number);
    }
  }
  // ^ flawed logic comes from here

  const [cardIndex, setCardIndex] = useState(0);
  const [resultIndex, setResultIndex] = useState(0);
  const [result, setResult] = useState([null, null, null, null, null]);

  const handleAnswer = decision => {

    if(decision === "yes"){
      const copy = result.slice();
      copy[resultIndex] = 2 ** (Object.keys(cardObject).length - resultIndex - 1);
      setResult(copy);
    } else {
      const copy = result.slice();
      copy[resultIndex] = 0;
      setResult(copy);
    }

    if(cardIndex < Object.keys(cardObject).length - 1) setCardIndex(cardIndex + 1);
    if(resultIndex < Object.keys(cardObject).length) setResultIndex(resultIndex + 1);
  }

  useEffect(() => {
    if(!result.includes(null)) navigate(`/result/${result.reduce((acc, curr) => acc + curr, 0)}`);
  }, [result]);

  // for debugging
  // useEffect(() => {
  //   console.log(cardIndex);
  //   console.log(Object.values(cardObject)[cardIndex]);
  //   console.log(result);
  // }, [result, cardObject, cardIndex]);

  const navigate = useNavigate();

  return (
      <div className={"relative bg-amber-100 flex flex-col justify-evenly items-center p-12 lg:p-24 relative h-screen"}>

        <div className={"w-full order-2 flex justify-center item-center h-[60%]"}>
          <Box
              array={Object.values(cardObject)[Object.keys(cardObject).length - cardIndex - 1]}
              columns={Math.floor(Math.sqrt(Math.pow(2, cards - 1)))}
          />
        </div>

        <div className={"flex gap-6 order-3 text-xl font-bold h-[10%] text-white"}>
          <button
              onClick={() => handleAnswer("yes")}
              className={"hover:scale-[102%] active:scale-[98%] p-3 rounded-lg bg-amber-500 px-12"}
          >
            Yes
          </button>

          <button
              onClick={() => handleAnswer("nah id win")}
              className={"hover:scale-[102%] active:scale-[98%] p-3 rounded-lg bg-amber-500 px-12"}
          >
            No
          </button>
        </div>

        <button
          className={"font-normal order-1 lg:absolute top-5 left-5 text-white text-2xl hover:scale-[102%] active:scale-[98%] p-3 rounded-lg bg-amber-400 px-12"}
          onClick={() => navigate("/")}
        >
          Instructions Again!
        </button>

      </div>
  );
}

// 29 and 23 are switched?
// problem with the creation of values
// so are 30 and 15
// gotta fix
// IT SHOULD BE REVERSED!!!

// FIXED ZAMN!!