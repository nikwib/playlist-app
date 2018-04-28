import React from 'react';
import { Playlist } from './Playlist';

const renderPlaylists = (props) => props.playlists.map(playlist => {
return (
    <Playlist
      key={playlist._id}
      {...playlist}
    />);
});


const Playlists = (props) => {
  return (
    <div>
      {renderPlaylists(props)}
    </div>
  )
};

export default Playlists;