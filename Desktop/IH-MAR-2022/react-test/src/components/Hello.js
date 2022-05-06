import React from "react";
import FavoriteAnimal from "./FavoriteAnimal";
import FavoriteColor from "./FavoriteColor";

function Hello(props){
   return (
       <div>
       <p>Hello my name is {props.name} </p> 
       <FavoriteAnimal favAnimal= {props.favAnimal}/>
       <FavoriteColor favColor= {props.favColor}/>
       </div>
   );     
}


export default Hello;