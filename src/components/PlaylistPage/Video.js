import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
// const time = moment(moment.duration(car.total_driving_time)).format('HH:mm');

export const Video = ({url, creator, description}) => {
  return (
    <div className="video-item">
      <div className="creator"> {creator}</div>
      <div className="url"> {url}</div>
      <div className="Description"> {description}</div>
    </div>
  )
};

