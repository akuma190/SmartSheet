import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    //always define the initial state int he constructor
    constructor() {
        super();
        //unles we call the super we cannot use this in the javascript.
        this.state = {
            counter: 0
        }
        //if we want to make the counter available to the method tot he class.
        //we will have to bind the method to the class
        //we will have to do that inside the construcor.
        this.increment=this.increment.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }
    increment() {//
        //here we are directly changing the state rather than this we should use the useState();
        //this.state.counter++;
        this.setState({
            state:this.state.counter++
        });
    }
}



export default Counter;