import React, { useEffect, useState } from "react";
import "./spin.css"
import Request from "..//..//..//js/services/Request"
import spinSound from "..//..//sounds/spinSound.wav"
import { SpinAnimation,drawJoker, drawWinLines } from "../../helpers/draw";


export default function Spin({ setResult, spinSum, setUserBalance, balance }) {

    const [disabled, setDisabled] = useState(false)
    const [spinStart, setSpinStart] = useState(false)


    useEffect(() => {
        if (balance >= spinSum) {
            setTimeout(() => {
                setDisabled(false)
            }, 500);
        } else {
            setDisabled(true)
        }
    }, [spinSum, balance,])

    const spin = () => {
        const ClearSpinAnim = SpinAnimation(setResult)
        setSpinStart(true)
        setDisabled(true)
        Request.post('spin/new_spin', { spinSum })
            .then(data => {
                const {winLines,winSxema,vertikallyJoker} = data.result
                setTimeout(() => {
                    ClearSpinAnim()
                }, 3500);
                setTimeout(() => {
                setSpinStart(false)
                setResult(data.random);
                setUserBalance(data.newBalance)
                if (winLines.length) {
                    if (vertikallyJoker.length) {
                        drawJoker(vertikallyJoker)
                        setTimeout(() => {
                            drawWinLines(winLines,winSxema)
                        }, 2000);
                    }else{
                        drawWinLines(winLines,winSxema)
                    }
                        console.log(data.result);

                } else if (data.result.freeSpin.length) {

                    console.log(data.result.freeSpin)

                    if (data.newBalance >= spinSum) {
                        setDisabled(false)
                    }
                }
            }, 4000);
            })
            
            .catch(e => { alert("tuu ara"); console.log(e); })
    }

    return (
        <>
            {spinStart ? <audio src={spinSound} autoPlay volume="100"></audio> : null}
            <div className="spinMain">
                <button className="spinButton" onClick={spin} disabled={disabled}>
                    Spin
                    <p>{spinSum}</p>
                </button>
            </div>
        </>
    )
}