import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from './sliceReducers'


export const store = configureStore({
    reducer:{
        calculatorName: calculatorReducer,
    }
})