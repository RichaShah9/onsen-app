import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureList from './PictureList';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PictureList/>
      </div>
    );
  }
}

export default App;
