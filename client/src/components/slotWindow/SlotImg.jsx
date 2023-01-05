import React from "react";

export default function name({img , id}) {
    return (
        <div className="rowBox" id={id}>
            <img src={img} alt="errr" />
        </div>
    )
}