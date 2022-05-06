import React from "react";

const ColorBox = (props) => {
    return(
        <div style={{display: "flex", flexDirection: "row"}}>
        key={props.individualColor.id}

                <li style={{color: props.individualColor.color}}>{props.individualColor.color}</li>
                <button>
                    Remove
                </button>
                </div>
    )
}

export default ColorBox;