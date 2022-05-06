import React from 'react';
import RandomNum from './RandomNumber';
import FavoriteAnimal from './FavoriteAnimal';

function Hello(props){
    return (
        <div>
            <p> Hello, my name is {props.name}!</p>
            <FavoriteAnimal favAnimal={props.favAnimal} />
            <RandomNum />
        </div>
    );
}

export default Hello;