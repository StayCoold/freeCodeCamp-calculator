import { createSlice } from "@reduxjs/toolkit";
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

const initialState = {
  input: '',
  output: '',
  currentNumber: '',
};

export const calculatorSlice = createSlice({
  name: "calculatorName",
  initialState,
  reducers: {
    handleClear: (state) => {
      state.input = '';
      state.output = '0';
      state.currentNumber = '';
    },
    handleNum: (state, action) => {
      if(state.input === ''){
        state.currentNumber = action.payload;
        state.input = state.input + action.payload;
      }else if(/[\.]/.test(state.currentNumber) == true){
        state.currentNumber = state.currentNumber + action.payload;
        state.input = state.input + action.payload;
      }else if(state.currentNumber[0] === '0' && action.payload !== '0'){
        state.input = state.input.slice(0,state.currentNumber.length - 1) + action.payload;
        state.currentNumber = state.currentNumber.slice(0,state.currentNumber.length - 1) + action.payload;
      }else{
        state.input = state.input + action.payload;
        state.currentNumber = state.currentNumber + action.payload;
      }
    },
    handleOperator: (state, action) => {
      if(state.input === ''){
        state.input = state.output + action.payload;
        state.currentNumber = '';
      }else{
        if(/[+\-*/()][+\-*/()]$/.test(state.input) == true ){
          state.input = state.input.slice(0, state.input.length - 2) + action.payload;
          state.currentNumber = '';
      }else if(/[+*/()]$/.test(state.input) == true){
        state.input = state.input.slice(0, state.input.length - 1) + action.payload;
        state.currentNumber = '';
      }else{
        state.input = state.input + action.payload;
        state.currentNumber = '';
      }
      }
      
    },
    handleMinus: (state, action) => {
      let char = state.input[state.input.length - 2];

      // si hay un solo caracter se muestra '-'

      if (state.input.length === 1) {
        state.input = state.input + action.payload;
        state.output = state.output;

        //si el ultimo caracter es un operador y el anterior a ese un numero -> 0 operador ( -
      } else if (/[+\-*/()]$/.test(state.input) && /[0-9]/.test(char)) {
        state.input = state.input + action.payload;
        state.output = state.output;
        state.currentNumber = '';
      } else if (/[+\-*/()]/.test(char) && /[+\-*/()]$/.test(state.input)) {
        state.input = state.input.slice(0, -1) + action.payload;
        state.output = state.output;
        state.currentNumber = action.payload;
      } else if (state.input === "") {
        state.input = state.output + action.payload;
        state.output = state.output;
      } else {
        state.input = state.input + action.payload;
        state.output = state.output;
        state.currentNumber = '';
      }
    },
    handleDecimal: (state) =>{
      if(state.currentNumber === ''){
        state.input = state.input + '0.'
        state.currentNumber = '0.'
      }else if(/[\.]/.test(state.currentNumber) !== true){
        state.input = state.input + '.';
        state.currentNumber = state.currentNumber + '.';
      }
    },
    handleEqual: (state) => {
      if(state.input == ''){
        state.output = state.output;
      }else{
        state.output = math.evaluate(state.input).toString();
        state.currentNumber = math.evaluate(state.input).toString();
        state.input = '';
      }
    },
    handleZero: (state) => {
      if(/[\.]/.test(state.currentNumber) == true){
        state.input = state.input + '0';
        state.currentNumber= state.currentNumber + '0';
      }else if(state.currentNumber[0] != '0'){
        state.input = state.input + '0';
        state.currentNumber= state.currentNumber + '0';
      }
    },
  },
});


export const {
  handleClear,
  handleNum,
  handleOperator,
  handleMinus,
  handleDecimal,
  handleEqual,
  handleZero,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
