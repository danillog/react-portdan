import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import Wave from "./Wave/Wave";
import Bio from "./Bio/Bio";

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
          <div class="col-lg agua">
            <Wave />
          </div>
          <div class="row ">
            <div class="col-sm caixa">            
                <div>
                  <Bio />
                 
                  <h1> {this.state.name}</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed placerat eros. Fusce vel sem purus. Nullam eget eleifend nunc. Cras imperdiet finibus pellentesque. Suspendisse varius felis in vestibulum elementum. Mauris tortor libero, efficitur eget quam et, lobortis lobortis elit. Sed interdum euismod varius. Sed nec congue massa, non egestas urna. Aenean volutpat dui eget nisi gravida, ac efficitur nisi convallis. Maecenas efficitur finibus erat eu fringilla. Donec consectetur in enim at dapibus. Fusce facilisis euismod interdum. Donec elementum enim neque, et sollicitudin elit hendrerit ac. Fusce ac consectetur sapien.)</p>
                  <h1> {this.state.name}</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed placerat eros. Fusce vel sem purus. Nullam eget eleifend nunc. Cras imperdiet finibus pellentesque. Suspendisse varius felis in vestibulum elementum. Mauris tortor libero, efficitur eget quam et, lobortis lobortis elit. Sed interdum euismod varius. Sed nec congue massa, non egestas urna. Aenean volutpat dui eget nisi gravida, ac efficitur nisi convallis. Maecenas efficitur finibus erat eu fringilla. Donec consectetur in enim at dapibus. Fusce facilisis euismod interdum. Donec elementum enim neque, et sollicitudin elit hendrerit ac. Fusce ac consectetur sapien.)</p>
                  <h1> {this.state.name}</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed placerat eros. Fusce vel sem purus. Nullam eget eleifend nunc. Cras imperdiet finibus pellentesque. Suspendisse varius felis in vestibulum elementum. Mauris tortor libero, efficitur eget quam et, lobortis lobortis elit. Sed interdum euismod varius. Sed nec congue massa, non egestas urna. Aenean volutpat dui eget nisi gravida, ac efficitur nisi convallis. Maecenas efficitur finibus erat eu fringilla. Donec consectetur in enim at dapibus. Fusce facilisis euismod interdum. Donec elementum enim neque, et sollicitudin elit hendrerit ac. Fusce ac consectetur sapien.)</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
