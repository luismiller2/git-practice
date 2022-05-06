import React from "react";

const Count = () => {
    // hook
    // two values
    // 1. The variable that we will call/change e.g.: something
    // 2. A function which changes the first variable e.g.: setSomething
    // React.useState() will declare the default value for the hook
    let [count, setCount] = React.useState(0)
 
    const add = () =>{
        setCount(count + 1);
    };

    const subtract = () =>{
        if(count > 0){
            setCount(count - 1);
        }
    };

    return (
        <div style={{textAlign: "center"}}>
            <h3>The number is: {count}</h3>
            <button onClick={subtract}>Subtract</button>
            <button onClick={add}>Add</button>
        </div>
    );
};

export default Count;