import differenceInYears from 'date-fns/differenceInYears';
import startOfToday from "date-fns/startOfToday";
import React, { Component } from "react";
import i18n from "../../i18n";
import "./Bio.css";


class Bio extends Component {
    constructor() {
    super();

    this.state = {
    age: (differenceInYears((startOfToday()) ,new Date(1996,7,10))),
    };
  }


  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="photo">
            <img alt="Foto de perfil do github" src="http://github.com/danillog.png" />
          </div>
        </div>
        <div className="col-lg-8 text">
          <h4>{i18n.t("bio")}</h4>
        </div>
      </div>
    );
  }
}

export default Bio;
