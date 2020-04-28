import React, { Component } from "react";
import { render } from "react-dom";
import Bio from "./Bio/Bio";
import Design from "./Design/Design";
import Footer from "./Footer/Footer";
import "./index.css";
import Wave from "./Wave/Wave";
import Works from "./Works/Works";

class App extends Component {
  render() {
    return (
      <div className=" changeBackground">
          <div class="col-lg agua">
            <Wave />
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
