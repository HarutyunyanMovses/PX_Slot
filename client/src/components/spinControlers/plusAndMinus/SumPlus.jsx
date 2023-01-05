import React from "react";
import "./plusAndMinus.css"
import plus from "./plus.png"
export default function SumPlus({spinSum,setSpinSum}) {
    
    const plusSum = () =>{
        if(spinSum === 10){
            setSpinSum(20)
        }else if (spinSum<5000) {
            setSpinSum(spinSum + 20)
        }
    }

    return(
        <div className="sumPlus" onClick={plusSum}>
            <img src={plus} alt="+" />
        </div>
    )
}