import { render } from '@testing-library/react';
import React from 'react';
import './Counter.css';

function Counter(){
        return (
          <div className="counter">
             <button>+1</button>
             <span>0</span>
          </div>
        );
      
}

export default Counter;