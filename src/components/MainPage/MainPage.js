import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../store/actions/actions';
import CreatePlaylist from './CreatePlaylist';
import './MainPage.css';
import Playlists from './Playlists';

class MainPage extends Component {

  componentDidMount = () => {
    this.props.getPlaylists();
  }

  render() {
    console.log('main',this.props.playlists);
    
    return (
      <div className="MainPage row">
        <h1> Playlist Manager </h1>
        <CreatePlaylist />
        <Playlists playlists={this.props.playlists}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // Map your state to props
  playlists: state.playlists
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  getPlaylists: () => dispatch(actions.getPlaylists),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
