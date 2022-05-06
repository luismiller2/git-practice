import React from 'react';

function FavoriteAnimal(props) {
    return (
        <div>
            <p>My favorite animal is {props.favAnimal}!</p>
        </div>
    );
}

export default FavoriteAnimal;