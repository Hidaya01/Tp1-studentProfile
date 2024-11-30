import React from "react";
import "./Navigation.css"; 
import logo from "../images/logo.jpg";


function Navigation() {
  return (
    <nav>
        <ul >
        <li className="logo-item">
            <img src={logo} alt="Logo" />
        </li>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#profil">Profil</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
