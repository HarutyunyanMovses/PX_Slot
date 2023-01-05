import React, { useLayoutEffect, useState } from "react";
// service
import Request from "../../js/services/Request";
// components
import Balance from "./balance/Balance";
import LastWin from "./lastWin/Lastwin";
import SumMax from "./minAndMax/SumMax";
import SumMin from "./minAndMax/SumMin";
import SumMinus from "./plusAndMinus/SumMinus";
import SumPlus from "./plusAndMinus/SumPlus";
import Spin from "./spin/Spin";
import "./spinControlers.css"

export default function SpinControlers({setResult}) {

    const [userBalance,setUserBalance] = useState();
    const [spinSum,setSpinSum] = useState(10)

    useLayoutEffect(()=>{
        Request.post("user/user_data")
        .then(data=>setUserBalance(data.balance))
    },[])

    return(
        <div className="spinControlersMain">
            <Balance balance={userBalance}/>
            <SumMin setSpinSum={setSpinSum}/>
            <SumMinus setSpinSum={setSpinSum} spinSum = {spinSum}/>
            <Spin 
            setResult = {setResult} 
            spinSum = {spinSum} 
            setUserBalance={setUserBalance} 
            balance={userBalance}
            />
            <SumPlus setSpinSum={setSpinSum} spinSum = {spinSum}/>
            <SumMax setSpinSum={setSpinSum}/>
            <LastWin/>
        </div>
    )
}