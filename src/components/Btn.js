import {React, useEffect} from "react";
import { useDispatch } from "react-redux";
import { handleClear,handleNum,handleOperator,handleMinus,handleDecimal,handleEqual,handleZero } from "../redux/sliceReducers";

export const Btn = ({btnKey,btnClass, btnType, btnId}) => {

  const dispatch = useDispatch();

  function handleClick(){
    switch(btnType){
      case 'num': return dispatch(handleNum(btnKey));
      case 'ac': return dispatch(handleClear());
      case 'operator': return dispatch(handleOperator(btnKey));
      case 'minus': return dispatch(handleMinus(btnKey));
      case 'decimal': return dispatch(handleDecimal(btnKey));
      case 'equal': return dispatch(handleEqual());
      case 'zero': return dispatch(handleZero());
    }

  }



  return(

    <button id={btnId} type="button" className={btnClass} onClick={handleClick}>{btnKey}</button>

  );
};


