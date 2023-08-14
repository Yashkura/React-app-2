import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/userDetails">
            UserDetails
          </Link>
        </li>
      </ul>
    );
  }
}
