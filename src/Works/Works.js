import React, { Component } from 'react';
import i18n from '../i18n';
import './Works.css';

class Works extends Component {
  render() {
    return (
    <div>
        <div className="col-lg-12 text-center workHard">
          <h3> {i18n.t("trabalhoT")} </h3>
        </div>
        <div className="col-lg-12 text-center works text-break">
          <table className="table">
            <thead>
              <tr>
                <th> {i18n.t("trabalhoC1")} </th>
                <th> {i18n.t("trabalhoC2")} </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="http://ahomeopatia.com/"> {i18n.t("trabalho1")} </a>
                </td>
                <td>PHP, SQL, CSS</td>
              </tr>
              <tr>
                <td>
                  <a href="https://react-agenda.stackblitz.io"> {i18n.t("trabalho2")} </a>
                 </td>
                <td>ReactJS, Bootstrap</td>
              </tr>
              <tr>
                <td> {i18n.t("trabalho3")} </td>
                <td>ReactJS, CSS</td>
              </tr>
              <tr>
                <td>
                  <a href="https://exibirs.000webhostapp.com/"> {i18n.t("trabalho4")} </a>
                </td>
                <td>ReactJS, CSS</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.facebook.com/Atak-Uniforme-103032554719582/"> {i18n.t("trabalho5")}  </a>
                </td>
                <td> {i18n.t("trabalho5a")} </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
      
    );
  }
}

export default Works;