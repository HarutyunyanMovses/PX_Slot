import React from "react";
import  "./minAndMax.css"

export default function SumMax({setSpinSum}) {

    const sumMax = () =>{
        setSpinSum(5000)
    }

    return (
        <div className="sumMax" onClick={sumMax}>Max</div>
    )
}