import React, { Component } from 'react';
import FirstComponent,{SecondComponent} from './Components/examples/FirstComponent'
import ThirdComponent from './Components/examples/ThirdComponent'
import Counter from './Components/counter/Counter'
import logo from './logo.svg';
import './App.css';

 
class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter by="1"></Counter>
       <Counter by="5"></Counter>
       <Counter by="10"></Counter>
      </div>
    );
  }
}

class LearningComponents extends Component{
  render() {
    return (
      <div className="LearningComponents">
         My Hello World
         <FirstComponent></FirstComponent>
         <SecondComponent></SecondComponent>
         <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}



export default App;