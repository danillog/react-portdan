import React, { Component } from "react";
import { render } from "react-dom";
import Select from 'react-select';
import Bio from "./Bio/Bio";
import Design from "./Design/Design";
import Footer from "./Footer/Footer";
import i18n from './i18n';
import "./index.css";
import Wave from "./Wave/Wave";
import Works from "./Works/Works";

class App extends Component {
  constructor() {
    super();
    this.state = {
      options : [
        { value:'en', label: 'English' },
        { value:'es', label: 'Español' },
        { value:'gn', label: 'Deutsch' },
        { value:'pt', label: 'Português' }
      ],
      mudaIdioma: 'padrao'
    }
  }
  
  handleChange = (event) => {
    this.setState({
      mudaIdioma: event.label
    })
    i18n.changeLanguage(event.value);
  };

  render() {
    return (
      <div className=" changeBackground">
        <div class="col-lg agua">
          <Wave />
        </div> 
        <div className="container language">
          <Select className="dropdown" isSearchable="false" options={this.state.options} 
            onChange= {this.handleChange} placeholder= {i18n.t("idioma")}/>
        </div>
        
        <div className="container bio-container">
          <Bio />
        </div>
        <div class="container">
          <Works />
        </div>
        <div class="container">
          <Design />
        </div>
        <div className="container-fluid">
          <Footer />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
