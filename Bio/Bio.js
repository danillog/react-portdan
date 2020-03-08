import differenceInYears from 'date-fns/differenceInYears';
import startOfToday from "date-fns/startOfToday";
import React, { Component } from "react";
import "./Bio.css";

class Bio extends Component {
    constructor() {
    super();

    this.state = {
    age: (differenceInYears((startOfToday()) ,new Date(1996,7,10))),
    };
  }


  render() {
    console.log(this.state.age)
    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="photo">
            <img src="http://github.com/danillog.png" />
          </div>
        </div>
        <div className="col-lg-8 text">
          <h4>Sou Danillo,  tenho {this.state.age} anos sou desenvolvedor e apaixonado pelo mar e css.</h4>
        </div>
      </div>
    );
  }
}

export default Bio;
