import React from "react";

const TextInput = (props) =>{
    return (
        <div>
            <label>{props.name}</label>
            <input onChange={props.action} name={props.name} value={props.value} />
        </div>
    );
};

export default TextInput;