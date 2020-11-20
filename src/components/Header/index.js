import React, { Component } from 'react';
import Select from 'react-select';
import Logo from '../../assets/img/computador-portatil.png';
import i18n from '../../i18n';
import './header.css';

class  Header extends Component{
  constructor() {
    super();

  }


  render(){
    return(
      <div id="header">
        <div id='logo' className="col-">
          <img  src={ Logo } alt="Logo de notebook" />
          <h2> Danilo Gomes </h2>
        </div>
        <div id="language" >
          <Select className="dropdown" isSearchable="false" options={this.props.options} 
            onChange= {this.props.handleChange} placeholder= {i18n.t("idioma")}/>
        </div>
      </div>
    )
  }
}

export default Header;