import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
         My Hello World
         <FirstComponent></FirstComponent>
      </div>
    );
  }
}

class FirstComponent extends Component {
  render() {
    return (
      <div className="FirstComponent">
         First Component
      </div>
    );
  }
}
export default App;