import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import PlaylistPage from './components/PlaylistPage/PlaylistPage';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={MainPage} />
        <Route path='/list/:id' component={PlaylistPage} />
      </div>
    );
  }
}

export default App;
