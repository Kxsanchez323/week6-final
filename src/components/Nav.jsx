import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo.jpg"

function Nav() {
    function openMenu() {
      document.body.classList += " menu--open"
  }
  
  function closeMenu() {
      document.body.classList.remove("menu--open")
  }
  
    return (
      <>
        <div className="nav__wrapper">
          <nav>
            <Link to="/">
              <img
                src={Logo}
                alt="My logo"
                className="logo"
              />
            </Link>
            <ul className="nav__link--list">
              <li className="nav__link">
                <Link className="nav__link--anchor link__hover-effect" to="/">
                  Home
                </Link>
              </li>
              
              <li className="nav__link">
                <Link
                  className="nav__link--anchor nav__link--anchor-primary"
                  to="mailto:kxsanchez323@gmail.com"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button className="btn__menu click" onClick={openMenu}>
              <FontAwesomeIcon icon="bars"/>
            </button>
  
            <div className="menu__backdrop">
              <button
                className="btn__menu btn__menu--close click"
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon="times"/>
              </button>
              <ul className="menu__links">
                <li className="menu__list">
                  <Link to="/" className="menu__link" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                
                <li className="menu__list">
                  <a
                    className="menu__link"
                    href="mailto:kxsanchez@323.com"
                    onClick={closeMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>

    )
}

export default Nav