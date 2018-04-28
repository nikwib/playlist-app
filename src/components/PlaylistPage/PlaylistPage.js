
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../store/actions/actions';
import { Video } from './Video';

class PlaylistPage extends Component {

  componentDidMount = () => {
    this.props.getPlaylistInfo(this.props.match.params.id);
  };

  renderPlaylistInfo = () => {
    return this.props.playlist.videos.map(video => (
      <Video 
        key={video._id}
        {...video} />
    ))
  };

  render() {
    return (
      <div className="PlaylistPage row" >
        <h1> Playlist {this.props.playlist.playlist} </h1>
        {this.renderPlaylistInfo()}
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  // Map your state to props
  playlist: state.playlist
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  getPlaylistInfo: (id) => dispatch(actions.getPlaylistInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);
