import React from 'react';
import classes from './MeetupsItem.module.css';

function MeetupsItem(props) {
  return(
    <h2 className={classes.header}>{props.address}</h2>
  );
}

export default MeetupsItem;
