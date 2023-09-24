import React from "react";
import './display.css';
import { useSelector } from "react-redux";


export const Display = () => {

  const input = useSelector((state) => state.calculatorName.input)
  const output = useSelector((state) => state.calculatorName.output)


  return(

    <div id='display' className="text-end display">
      <div className="operation"><p>{input}</p></div>
      <div className="result"><p>{output}</p></div>
    </div>

  );
};
