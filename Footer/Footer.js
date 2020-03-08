import { faBehance, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div class="mt-5 pt-5 pb-5 footer">
        <div>
          <div class="row">
            <div class=" col about-company text-center">
              <p>Entre em contato </p>
              <p className="icons">
                <a href="https://www.behance.net/danillogomes" target="_blank"><FontAwesomeIcon  icon={faBehance} /> </a>
                <a href="https://github.com/danillog" target="_blank"><FontAwesomeIcon  icon={faGithub} /></a>
                <a href="https://www.instagram.com/danillo.otavio/" target="_blank"><FontAwesomeIcon  icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/danillo-otávio-gomes-66b12610a" target="_blank"><FontAwesomeIcon  icon={faLinkedin} /></a>
              </p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col copyright text-center">
              <p class=""><small class="text-white-50">© 2020. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
        </div>
      
    );
  }
}

export default Footer;