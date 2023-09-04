import React from "react";
import "./Headlist.css";
import Home from "./HomePage/Home";
// import
function Header() {
  return (
    <header>
      <div>
        <a href={<Home/>}>
          <img className="logo" src="Black And White Aesthetic Minimalist Modern Simple Typography Coconut Cosmetics Logo.png" alt="logo-hre" />
        </a>
      </div>
      <nav>
        <ul className="headlist">
          <li>Главная</li>
          <li>Контакты</li>
          <li>Информация</li>
        </ul>
      </nav>
      <div className="navbar-end">
            <div className="navbar-item">

            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link"
                href="https://bulma.io/documentation/overview/start/"
              >
                Language
              </a>
              <div className="navbar-dropdown is-boxed">
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/overview/start/"
                >
                  Overview
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/overview/modifiers/"
                >
                  Modifiers
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/columns/basics/"
                >
                  Columns
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/layout/container/"
                >
                  Layout
                </a>
          
              </div>

              {/* <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="https://bulma.io"
                    target="_blank"
                    href="https://twitter.com/yehuda_kusaev"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>Tweet</span>
                  </a>
                </p>
                
              </div> */}
            </div>
          </div>
        </div>
    </header>
  );
}

export default Header;
