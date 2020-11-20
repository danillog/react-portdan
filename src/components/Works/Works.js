import React, { Component } from 'react';
import B355 from '../../assets/img/355.png';
import Atak from '../../assets/img/atak.png';
import Blog from '../../assets/img/blog.png';
import Filmaria from '../../assets/img/Filmaria.png';
import Pro from '../../assets/img/prosolution.png';
import i18n from '../../i18n';
import './Works.css';

class Works extends Component {
  render() {
    return (
      <div id="work">
        <h2> { i18n.t("Projetos")} </h2>
        <div className="card">
          <a href="https://www.facebook.com/Atak-Uniforme-103032554719582/"target="_blank" >
            <img className="card-img-top" src={ Atak } alt="Card image cap" />
          </a>
          <div className="card-body">
            <h5 className="card-title"> { i18n.t("AtakTitulo")} </h5>
            <p className="card-text"> { i18n.t("AtakDescribe")} </p>
          </div>
        </div>
        <div className="card">
          <a href="https://danilogomes.tech/355/"target="_blank" >
           <img className="card-img-top" src={ B355 } alt="Card image cap" />
          </a>
          <div className="card-body">
            <h5 className="card-title"> { i18n.t("Titulo355") } </h5>
            <p className="card-text"> { i18n.t("Describe355") } </p>
          </div>
        </div>
        <div className="card">
          <a href="https://prosolutioncosmeticos.com.br/"target="_blank" >
            <img className="card-img-top" src={ Pro } alt="Card image cap" />
          </a>
          <div className="card-body">
            <h5 className="card-title"> { i18n.t("ProTitulo") } </h5>
            <p className="card-text"> { i18n.t("ProDescribe") } </p>
          </div>
        </div>
        <div className="card">
          <a href="https://danilogomes.tech/filmes/"target="_blank" >
            <img className="card-img-top" src={ Filmaria } alt="Card image cap" />
          </a>
          <div className="card-body">
            <h5 className="card-title"> { i18n.t("FilmeTitulo") } </h5>
            <p className="card-text">  { i18n.t("FilmeDescribe") } </p>
          </div>
        </div>
        <div className="card">
          <a href="https://danilogomes.tech/blog/"target="_blank" >
            <img className="card-img-top" src={ Blog } alt="Card image cap" />
          </a>
          <div className="card-body">
            <h5 className="card-title"> { i18n.t("BlogTitulo") } </h5>
            <p className="card-text"> { i18n.t("BlogDescribe")  } </p>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Works;