import React, { Component } from 'react';
import './Works.css';

class Works extends Component {
  render() {
    return (
    <div>
        <div className="col-lg-12 text-center workHard">
          <h3> Conhecimento aplicado em projetos </h3>
        </div>
        <div className="col-lg-12 text-center works text-break">
          <table className="table">
            <thead>
              <tr>
                <th>Trabalho</th>
                <th>Conhecimento utilizado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="http://ahomeopatia.com/"> Correção de plugin Wordpress </a>
                </td>
                <td>PHP, SQL  e CSS</td>
              </tr>
              <tr>
                <td>
                  <a href="https://react-agenda.stackblitz.io"> Criação de agenda para agendamento de videoconferências (em desenvolvimento)</a>
                 </td>
                <td>ReactJS, Bootstrap</td>
              </tr>
              <tr>
                <td>Meu Portifólio</td>
                <td>ReactJS e CSS</td>
              </tr>
              <tr>
                <td>
                  <a href="https://exibirs.000webhostapp.com/"> Criação do logo, arte visual e frontend </a>
                </td>
                <td>ReactJS e CSS</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.facebook.com/Atak-Uniforme-103032554719582/"> Auxilio na virtualização de negócio.  </a>
                </td>
                <td>Logo e design gráfico.</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
      
    );
  }
}

export default Works;