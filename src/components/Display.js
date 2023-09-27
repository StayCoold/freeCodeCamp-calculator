import React from "react";
import './display.css';
import { useSelector } from "react-redux";


export const Display = () => {

  const input = useSelector((state) => state.calculatorName.input)
  const output = useSelector((state) => state.calculatorName.output)


  return(

    <div  className="text-end display">
      <div id='display' className="result"><p>{input || output}</p></div>
    </div>

  );
};
