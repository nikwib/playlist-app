import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../store/actions/actions';

class AddToPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: props.id,
      video: {
        creator: '',
        url: '',
        description: '',
      },
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
      video: {
        ...this.state.video,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = () => {
    this.props.addToPlaylist(this.state.id, this.state.video);
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
        <RaisedButton label="Add new video" onClick={this.handleOpen} />
        <Dialog
          title="Add video to playlist"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.input('Creator', 'creator')}
          {this.input('Url', 'url')}
          {this.input('Description', 'description')}
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addToPlaylist: (id, video) => { dispatch(actions.addToPlaylist(id, video)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToPlaylist);
