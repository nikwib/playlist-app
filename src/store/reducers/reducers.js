const defaultState = {
  playlists: [],
  playlist: {},
  fetching: false,
  message: {
    show: false,
    title: '',
    message: '',
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST_REQUEST':
    case 'GET_PLAYLISTS_REQUEST':
    case 'ADD_TO_PLAYLIST_REQUEST':
      return {
        ...state,
        fetching: true,
      };

    case 'GET_PLAYLISTS_FAILURE':
      return {
        ...state,
        fetching: false,
      };

    case 'ADD_PLAYLIST_FAILURE':
    case 'ADD_TO_PLAYLIST_FAILURE':
      return {
        ...state,
        message: {
          show: true,
          title: 'Alert',
          message: 'Something went wrong, please try again.',
        },
        fetching: false,
      };

    case 'GET_PLAYLISTS_SUCCESS':
      return {
        ...state,
        playlists: action.response,
        fetching: false,
      };

    case 'ADD_PLAYLIST_SUCCESS':
      return {
        ...state,
        playlists: state.playlists.concat(action.response),
        fetching: false,
      };

    case 'ADD_TO_PLAYLIST_SUCCESS':
      return {
        ...state,
        playlist:
          {
            ...state.playlist,
            videos: state.playlist.videos.concat(action.response),
          },
        fetching: false,
      };

    case 'GET_PLAYLIST_INFO':
      return {
        ...state,
        playlist: state.playlists.filter(playlist => (playlist._id === action.id))[0],
      };

    default:
  }
  return state;
};
