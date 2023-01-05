import React, { useState } from "react";
import "./slotMain.css"
import SlWindow from "./slotWindow/SlWindow";
import SpinControlers from "./spinControlers/SpinControlers";
import mainBackground from "./componentIcons/background.jpg"

export default function SlotMain(params) {
  
    const [result,setResult] = useState([])

    return(
        <div className="slotMain" style={{backgroundImage:` url(${mainBackground})`}}>
            <SlWindow result={result}/>
            <SpinControlers setResult={setResult}/>
        </div>
    )
}
