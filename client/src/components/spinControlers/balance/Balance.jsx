import React from "react";
import './balance.css'

export default function Balance({balance}) {
    

    return(
        <div className="balanceMain">
            <p>Balance</p>
            <div className="balance">{balance}
            <p>AMD</p>
            </div>
        </div>
    )
}