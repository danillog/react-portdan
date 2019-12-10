import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Eae putada do caralho'
    };
  }

  render() {
    return (
      <div>
        
        <h1> {this.state.name}</h1>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
