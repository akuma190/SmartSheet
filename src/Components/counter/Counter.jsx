import { render } from '@testing-library/react';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css';

class Counter extends Component {

    //Count has the class representing the total count. 
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className="counter">
                {/* we will be calling the parent method from the child class by passing it as a prop */}
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count">{this.state.counter}</span>
            </div>

        );
    }

    increment(by) {
        console.log(`increment from parent -${by}`)
        this.setState({
            counter: this.state.counter +by

        });
    }

    decrement(by) {
        console.log(`increment from parent -${by}`)
        this.setState({
            counter: this.state.counter -by

        });
    }
}

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className="counterbutton">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span> </span>
                <button onClick={this.decrement}>-{this.props.by}</button>
                <span className="count">{this.state.counter}</span>

            </div>
        );
    }
    increment() {
        this.setState({
            counter: this.state.counter + this.props.by

        });
        this.props.incrementMethod(this.props.by);
    }

    decrement() {
        this.setState({
            counter: this.state.counter - this.props.by

        });
        this.props.decrementMethod(this.props.by);
    }
}


CounterButton.defaultProps = {
    by: 1
}


CounterButton.propTypes = {
    by: PropTypes.number
}

//we can fix the prop type here.

export default Counter;