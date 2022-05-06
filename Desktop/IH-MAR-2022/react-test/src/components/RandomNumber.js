import React from 'react';

function RandomNum() {
    let ran= Math.floor(Math.random() * 50);
    return <p>My lucky number is {ran} </p>
  }

  export default RandomNum;