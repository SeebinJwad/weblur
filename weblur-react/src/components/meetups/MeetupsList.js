import React from 'react';
import MeetupsItem from './MeetupsItem'

function MeetupsList(props) {
  return (
    <ul>
      {props.meetups.map((meetup) =>
        <MeetupsItem key={meetup.id} address={meetup.address}/>)}
    </ul>
  );
}

export default MeetupsList;
