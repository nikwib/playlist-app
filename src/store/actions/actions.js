
const getPlaylists = {
  type: 'GET_PLAYLISTS',
  url: ('/playlist'),
  headers: {
    'Content-Type': 'application/json',
  }
};

const addPlaylist = body => ({
  type: 'ADD_PLAYLIST',
  url: ('/playlist'),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});

const getPlaylistInfo = id => ({
  type: 'GET_PLAYLIST_INFO',
  id
});

const addToPlaylist = id => ({
  type: 'ADD_TO_PLAYLIST',
  url: ('/playlist/' + id),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },  
});


export default {
  getPlaylists,
  addPlaylist,
  getPlaylistInfo,
  addToPlaylist,
};
