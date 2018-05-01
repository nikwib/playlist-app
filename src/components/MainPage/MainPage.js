import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../store/actions/actions';
import CreatePlaylist from './CreatePlaylist';
import Playlists from './Playlists';

class MainPage extends Component {
  componentDidMount = () => {
    this.props.getPlaylists();
  }

  render() {
    return (
      <div className="MainPage row">
        <h1 style={{ textAlign: 'center' }}> Playlist Manager </h1>
        <div style={{ textAlign: 'right', margin: 15 }}> <CreatePlaylist /></div>
        { this.props.playlists && <Playlists playlists={this.props.playlists} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists
});

const mapDispatchToProps = (dispatch) => ({
  getPlaylists: () => dispatch(actions.getPlaylists),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);