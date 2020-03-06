import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import Wave from "./Wave/Wave";
import Bio from "./Bio/Bio";
import Works from "./Works/Works";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg title">
            <h1> The Deep Ocean</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg agua">
            <Wave />
          </div>
        </div>
        <div class="row ">
          <div class="col-sm caixa">
            <div>
              <Bio />
            </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-sm middle">
            <div>
              <Works />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
