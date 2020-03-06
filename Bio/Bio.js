import React, { Component } from "react";
import "./Bio.css";
import startOfToday from "date-fns/startOfToday";
import format from 'date-fns/format';
import differenceInYears from 'date-fns/differenceInYears';

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
          <h4>Sou Danillo,  tenho {this.state.age} anos sou desenvolvedor e apaixonado por aprender coisas novas.</h4>
          <p> Queria saber como tudo funcionava, e havia o mesmo sentimento com computadores, lembro-me da emoção que foi trocar a memória RAM de 512mb, do computador da minha mãe, para 1gb. Não entendia muito bem como aquele amontoado de fios e poeira deixavam aquela máquina funcionar. </p>
        </div>
      </div>
    );
  }
}

export default Bio;
