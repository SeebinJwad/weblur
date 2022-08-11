import React from 'react';
import classes from './BlurCard.module.css'

function BlurCard(props) {
  return (
    <div className={classes.card}>
      <img className={classes.cardImage} draggable="false" alt="blur card img" src={props.imageURL}></img>
    </div>
  );
}
// {props.imageURL}
export default BlurCard;
