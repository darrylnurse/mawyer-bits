import React from "react";

export default function Box(props){

  return (
      <div className={`h-full text-amber-800 border-amber-600 border-2 grid grid-cols-${props.columns} bg-amber-50 rounded-xl text-center w-full lg:w-1/2 p-5`}>
        {props.array.map( element => (
            <div key={element.id}
            className={"text-4xl flex items-center justify-center select-none"}>
              {element}
            </div>
        ))}
      </div>
  );
}