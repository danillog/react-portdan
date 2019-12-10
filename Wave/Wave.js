import React, { Component } from 'react';
import './wave.css';

class Wave extends Component {
  render() {
    return (
     <div class='box'>
          <div class='wave -one'></div>
          <div class='wave -two'></div>
          <div class='wave -three'></div>
      </div>
    );
  }
}

export default Wave;