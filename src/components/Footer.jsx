import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
    <div className="footer__container">
      <div className="row row__footer">
        <ul className="footer__links">
            <Link to="/">
            <li className="nav__link--anchor link__hover-effect ">Home</li>
            </Link>
            <Link>
            <li className="nav__link--anchor link__hover-effect">Contact</li>
            </Link>
        </ul>
        <div className="copyright">Copyright &copy; 2023 Kevin Sanchez</div>
      </div>
    </div>
  </footer>
  )
}

export default Footer