import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import Wave from "./Wave/Wave";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Pra que"
    };
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 agua">
            <Wave />
          </div>
          <div class="row">
            <div class="col-12 caixa">
              <div class="row">
                <div class="col">
                  <h1> {this.state.name}</h1>
                  <p>Start editing to see some magic happen aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:)</p>
                  <h1> {this.state.name}</h1>
                  <p>Start editing to see some magic happen aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:)</p>
                  <h1> {this.state.name}</h1>
                  <p>Start editing to see some magic happen aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:)</p>
                  <h1> {this.state.name}</h1>
                  <p>Start editing to see some magic happen aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:)</p>
                  <h1> {this.state.name}</h1>
                  <p>Start editing to see some magic happen aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:)</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
