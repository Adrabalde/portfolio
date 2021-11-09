import React, { Component } from "react";
import './styleComponent.css';

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var description = this.props.data.description;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} title={network.title}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Accueil
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
              À propos
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Compétences
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Formations
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Description
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 id="headerH1">Je suis {name}.</h1>
            <h3>{description}</h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about" title="Go to about section">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
