import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-toggleable-md">
          <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse"
                  data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container">
            <Link className="navbar-brand" to="/">Enduro</Link>
            <ul className="nav flex-column">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Соревнования <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/promptly">Срочное объявление</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/regulation">Регламент</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Пользователи</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;