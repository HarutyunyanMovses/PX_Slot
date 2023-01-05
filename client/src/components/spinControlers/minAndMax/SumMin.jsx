import React from "react";
import "./minAndMax.css"

export default function SumMin({ setSpinSum }) {

    const setMin = () => {
        setSpinSum(10)
    }
    

    return (
        <div className="sumMin" onClick={setMin}>Min</div>
    )
}