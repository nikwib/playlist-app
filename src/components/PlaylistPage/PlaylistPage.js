import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import SocialPerson from 'material-ui/svg-icons/social/person';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../store/actions/actions';
import AddToPlaylist from './AddToPlaylist';
import { Video } from './Video';

class PlaylistPage extends Component {

  componentDidMount = () => {
    this.props.getPlaylistInfo(this.props.match.params.id);
  };

  renderPlaylistInfo = () => {
    return this.props.playlist.videos.map((video, i) => (
      <div key={video._id} style={{ margin: 50 }}>
        {(i > 0) && <Divider style={{ marginBottom: 50 }} />}
        <Video {...video} />
      </div>
    ))
  };

  render() {
    const time = this.props.playlist && moment(this.props.playlist.createdAt).calendar(null, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'DD/MM/YYYY'
    });
    return (
      <div className="Playlist row" >
        <h1 style={{ textAlign: 'center' }}> {this.props.playlist.playlist} </h1>
        <List>
          <ListItem
            primaryText={this.props.playlist.creator}
            leftIcon={<SocialPerson />}
            disabled={true}
            rightAvatar={<div style={{ fontStyle: 'italic' }}> Created {time} </div>}
          />
        </List>
        <div style={{ textAlign: 'right', margin: 15 }}>
          <AddToPlaylist id={this.props.match.params.id} />
        </div>
        {this.props.playlist.videos &&  this.renderPlaylistInfo()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playlist: state.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  getPlaylistInfo: (id) => dispatch(actions.getPlaylistInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);
