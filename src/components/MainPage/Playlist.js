import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
// const time = moment(moment.duration(car.total_driving_time)).format('HH:mm');

export const Playlist = ({playlist, creator, createdAt, _id}) => {
  return (
    <div className="playlist-item">
      <div className="title"> {playlist}</div>
      <div className="creator"> {creator}</div>
      <div className="date"> {createdAt}</div>
      <Link to={"/list/" + _id}> > </Link>

    </div>
  )
};

