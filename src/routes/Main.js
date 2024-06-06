import {useNavigate} from "react-router-dom";

export default function Main(){

  const navigate = useNavigate();

  return (
      <div className={"bg-amber-100 text-center font-bold text-xl lg:text-3xl flex flex-col gap-0 lg:gap-8 justify-evenly p-12 lg:p-24 items-center h-screen"}>
        <div>
          Welcome to Mawyer's Game!
          <br/>
          <br/>
          To play, you must guess a number from 1 to 31, and not tell us what it is!
          <br/>
          <br/>
          Then, there will be four cards, and tell us if your number is on the card, or not.
        </div>

        <button
            className={"font-normal text-white text-2xl hover:scale-[102%] active:scale-[98%] p-3 rounded-lg bg-amber-400 px-12"}
            onClick={() => navigate("game")}
        >Okay!</button>
      </div>
  )
}