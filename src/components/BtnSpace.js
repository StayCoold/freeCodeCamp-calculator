import React from "react";
import { Btn } from "./Btn";
import '../App.css';


export const BtnSpace = () => {


  return (
    <div className="">
      <div className="row">
        <Btn btnId='one' btnType ='num' btnKey='1' btnClass='btn btn-success col m-2' />
        <Btn btnId='two' btnType ='num'btnKey='2' btnClass='btn btn-success col m-2' />
        <Btn btnId='three' btnType ='num' btnKey='3' btnClass='btn btn-success col m-2' />
        <Btn btnId='divide' btnType ='operator' btnKey='/' btnClass='btn btn-secondary col m-2' />
      </div>
      <div className="row">
        <Btn btnId='four' btnType ='num' btnKey='4' btnClass='btn btn-success col m-2' />
        <Btn btnId='five' btnType ='num' btnKey='5' btnClass='btn btn-success col m-2' />
        <Btn btnId='six' btnType ='num' btnKey='6' btnClass='btn btn-success col m-2' />
        <Btn btnId='multiply' btnType ='operator' btnKey='*' btnClass='btn btn-secondary col m-2' />
      </div>
      <div className="row">
        <Btn btnId='seven' btnType ='num' btnKey='7' btnClass='btn btn-success col m-2' />
        <Btn btnId='eight' btnType ='num' btnKey='8' btnClass='btn btn-success col m-2' />
        <Btn btnId='nine' btnType ='num' btnKey='9' btnClass='btn btn-success col m-2' />
        <Btn btnId='subtract' btnType ='minus' btnKey='-' btnClass='btn btn-secondary col m-2' />
      </div>
      <div className="row">
        <Btn btnId='clear' btnType ='ac' btnKey='A/C' btnClass='btn btn-danger col m-2' />
        <Btn btnId='zero' btnType ='zero' btnKey='0' btnClass='btn btn-success col m-2' />
        <Btn btnId='decimal' btnType ='decimal' btnKey='.' btnClass='btn btn-danger col m-2' />
        <Btn btnId='add' btnType ='operator' btnKey='+' btnClass='btn btn-primary col m-2' />
      </div>
      <div className="row">
        <Btn btnId='equals' btnType ='equal' btnKey='=' btnClass='btn btn-primary m-2 col' />
      </div>
    </div>
    );
};
