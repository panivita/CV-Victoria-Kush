import React from "react";

import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();

library.add(faPhoneAlt, faEnvelope, faLinkedin, faGithub);

export const Header = () => {
  return (
    <header className="header-container">
      <div className="profil-foto">
        <img
          src="https://secure.gravatar.com/avatar/3da283f44646867ed9c7e7e022340300?size=150"
          alt="Victoria Kush"
        />
      </div>
      <div className="main-info">
        <h1>Victoria Kush</h1>
        <ul className="contact-details">
          <li>
            <i className="fas fa-phone-alt"></i>
            <a href="tel:71465372" title="nummer of the phone">
              71 46 53 72
            </a>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <a
              href="mailto:victoria.v.kush@gmail.com?"
              title="e-mail"
              subject="subject text"
              target="_blank"
              rel="noopener noreferrer"
            >
              victoria.v.kush@gmail.com
            </a>
          </li>
          <li>
            <i className="fab fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/victoria-kush-4a0455155"
              title="profil of the linkedin account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin account
            </a>
          </li>
          <li>
            <i className="fab fa-github"></i>
            <a
              href="https://github.com/panivita"
              title="profil of the github account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github account
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
