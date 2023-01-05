import React, { useEffect, useRef } from "react";
import { drawDemo,draw} from "../helpers/draw";
import "./slWindow.css"


export default function SlWindow({ result }) {
    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        draw(context, result.length ? result : drawDemo())
    }, [result])

    return <canvas className="slWindowMain" ref={canvasRef} {...result} />
}