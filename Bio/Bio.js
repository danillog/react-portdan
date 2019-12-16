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
          
          <p>
          Sou Danillo,  tenho {this.state.age} anos sou desenvolvedor e apaixonado por aprender coisas novas.
          </p>
          <p> Este site mostra o que sei fazer atualmente, utilizando as tecnologias: React, JavaScript, Date-fns </p>
          <p> Exemplo a minha idade é um estado do react, que está sendo exibida utilizando uma conta, data atual menos o meu aniversário, com funções da biblioteca date-fns </p>
        </div>
      </div>
    );
  }
}

export default Bio;
