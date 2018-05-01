import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import PlaylistPage from './components/PlaylistPage/PlaylistPage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Route exact path='/' component={MainPage} />
          <Route path='/list/:id' component={PlaylistPage} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
