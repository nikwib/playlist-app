import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import actions from './../../store/actions/actions';

// import '../../css/FleetOverview.css';
// import '../../css/Modals.css';

class CreatePLaylist extends Component {

  state = {
    showModal: false,
    playlist: {
      playlist: '',
      creator: '',
    }
  };

  onChange = (e) => {
    this.setState({
      playlist: {
        ...this.state.playlist,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = () => {
    this.props.addPlaylist(this.state.playlist);
    this.setState({ showModal: false })
  };

  input = (title, name, type = 'text') => (
    <FormGroup controlId={name}>
      <FormControl
        type={type}
        placeholder={title}
        name={name}
        onChange={this.onChange}
      />
    </FormGroup>
  )

  render() {
    return (
      <div>
        <Button className='create-playlist-button' onClick={() => this.setState({ showModal: true })}>
          Create new playlist
        </Button>
        <Modal
          className='Modals'
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <h1>Add</h1>
          <Modal.Body>
            <form>
              {this.input('Playlist name', 'playlist')}
              {this.input('Creator', 'creator')}
            </form>
            <Button className='cancel' onClick={() => this.setState({ showModal: false })}>Cancel</Button>
            <Button onClick={() => this.onSubmit()}>Submit</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addPlaylist: (playlist) => { dispatch(actions.addPlaylist(playlist)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePLaylist);
