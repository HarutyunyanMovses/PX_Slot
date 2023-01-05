import React from "react";
import "./plusAndMinus.css"
import minus from "./minus.png"
export default function SumMinus({spinSum,setSpinSum}) {
    
    const minusSum = () =>{
        if (spinSum >= 40) {
            setSpinSum(spinSum - 20);
        }else if (spinSum<40) {
            setSpinSum(10)
        }
    }

    return(
        <div className="sumMinus" onClick={minusSum}>
            <img src={minus} alt="-"  />
        </div>
    )
}