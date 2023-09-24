import logo from './logo.svg';
import './App.css';
import { BtnSpace } from './components/BtnSpace';
import { Display } from './components/Display';
import {useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { handleDecimal, handleEqual, handleMinus, handleNum, handleOperator } from './redux/sliceReducers';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('keydown',detectKey,true);
    
  },[])

  const detectKey = (e) => {
    switch(e.code){
      case 'Digit1': return dispatch(handleNum('1'));
      case 'Digit2': return dispatch(handleNum('2'));
      case 'Digit3': return dispatch(handleNum('3'));
      case 'Digit4': return dispatch(handleNum('4'));
      case 'Digit5': return dispatch(handleNum('5'));
      case 'Digit6': return dispatch(handleNum('6'));
      case 'Digit7': return dispatch(handleNum('7'));
      case 'Digit8': return dispatch(handleNum('8'));
      case 'Digit9': return dispatch(handleNum('9'));
      case 'Digit0': return dispatch(handleNum('0'));
      case 'NumpadMultiply': return dispatch(handleOperator('*'));
      case 'NumpadAdd': return dispatch(handleOperator('+'));
      case 'NumpadSubtract': return dispatch(handleMinus());
      case 'NumpadDecimal': return dispatch(handleDecimal());
      case 'NumpadDivide': return dispatch(handleOperator('/'));
      case 'Enter': return dispatch(handleEqual());
    }
  } 

  return (
      <div className="App container bg-primary-subtle pt-1">
        <Display />
        <BtnSpace />
      </div>
  );
}





export default App;
