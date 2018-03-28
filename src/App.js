import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'
// import './style.css';
import icon from './assets/404.png';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hello webpack12312</h1>
        <img src={icon} alt=""/>
      </div>
    )
  }
}

export default hot(module)(App);