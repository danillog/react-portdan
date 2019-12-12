import React, { Component } from "react";
import "./Bio.css";

class Bio extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="photo">
            <img src="http://github.com/danillog.png" />
            <div className="glass" />
          </div>
        </div>
        <div className="col-sm-8 text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sed placerat eros. Fusce vel sem purus. Nullam eget eleifend nunc.
            Cras imperdiet finibus pellentesque. Suspendisse varius felis in
            vestibulum elementum. Mauris tortor libero, efficitur eget quam et,
            lobortis lobortis elit. Sed interdum euismod varius. Sed nec congue
            massa, non egestas urna. Aenean volutpat dui eget nisi gravida, ac
            efficitur nisi convallis. Maecenas efficitur finibus erat eu
            fringilla. Donec consectetur in enim at dapibus. Fusce facilisis
            euismod interdum. Donec elementum enim neque, et sollicitudin elit
            hendrerit ac. Fusce ac consectetur sapien.)
          </p>
        </div>
      </div>
    );
  }
}

export default Bio;
