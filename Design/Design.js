import React, { Component } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './Design.css';

class Design extends Component {
  constructor() {
    super();

    this.state = {
      
    };
  }


  render() {
    
    return (
    <div>
      <div className="row">
        <div className="col-lg-12 text-center workHard">
          <h3> Projetos de Design </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg column ">
            <Zoom >
              <img width="250" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/85575176083063.5c5f1dd3b832d.png"/>
            </Zoom>
        </div>
        <div className="col-lg column ">
            <Zoom>
              <img width="500" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27f42175918625.5c5a7e9c494e9.jpg"/>
            </Zoom>
        </div>
        <div className="col-lg column ">
            <Zoom>
              <img width="500" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/85dbc870007437.5b9530273caa8.png"/>
            </Zoom>
        </div>
      </div>
      <div className="row">
        <div className="col-lg column ">
            <Zoom>
              <img width="500" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b5c2f770007437.5b9530273d593.jpg"/>
            </Zoom>
        </div>
        <div className="col-lg column ">
            <Zoom>
              <img width="500" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/20cf8f70007437.5b9530273d0a0.jpg"/>
            </Zoom>
        </div>
        <div className="col-lg column ">
            <Zoom>
              <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e0019769952631.5b929f6df33e3.gif"/>
            </Zoom>
        </div>
      </div>
    <div className="row">
      <div className="col-lg column ">
          <Zoom>
            <img width="500" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/15e92c69934527.5b92117f74d86.gif"/>
          </Zoom>
      </div>
      <div className="col-lg column ">
          <Zoom>
            <img width="500" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c002cc58803423.5a0a23867bf7a.png"/>
          </Zoom>
      </div>
    </div>
  </div>
      
    );
  }
}

export default Design;