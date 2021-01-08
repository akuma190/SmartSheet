import React, { Component } from 'react';
import FirstComponent,{SecondComponent} from './Components/examples/FirstComponent'
import ThirdComponent from './Components/examples/ThirdComponent'
import Counter from './Components/counter/Counter'
import ToDoApp from './Components/todo/ToDoApp'
import logo from './logo.svg';
import './App.css';

 
class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Counter/> */}
       <ToDoApp/>
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