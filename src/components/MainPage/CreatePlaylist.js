import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../store/actions/actions';

class CreatePlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: props.id,
      playlist: {
        playlist: '',
        creator: '',
      }
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({
      playlist: {
        ...this.state.playlist,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = () => {
    this.props.addPlaylist(this.state.playlist);
    this.setState({ open: false });
  };

  input = (title, name, type = 'text') => (
    <TextField
      id={name}
      name={name}
      value={this.state.value}
      floatingLabelFixed={true}
      floatingLabelText={title}
      onChange={this.handleChange}
      type={type}
    />
  )

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.onSubmit}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Create new playlist" onClick={this.handleOpen} />
        <Dialog
          title="Create new playlist"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.input('Playlist name', 'playlist')}
          {this.input('Creator', 'creator')}
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addPlaylist: (playlist) => { dispatch(actions.addPlaylist(playlist)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);
