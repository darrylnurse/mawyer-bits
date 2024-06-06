import {useNavigate, useParams} from "react-router-dom";

export default function Result(){

  const {number} = useParams();
  const navigate = useNavigate();

  return (
      <div className={"flex flex-col h-screen justify-evenly p-24 text-center items-center font-bold text-4xl"}>

        <div>Your number was {number}!</div>

        <button
          className={"font-normal top-5 left-5 text-white text-2xl hover:scale-[102%] active:scale-[98%] p-3 rounded-lg bg-amber-400 px-12"}
          onClick={() => navigate("/")}
        >
          Play Again!
        </button>
      </div>
  )
}