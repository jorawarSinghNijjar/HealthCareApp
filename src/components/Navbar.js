import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: this.props.loggedIn
    };
  }

  mainList = () => {
    return (
      <ul className="navbar-nav ml-auto mr-4">
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/">
            Services
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/">
            Guide
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/">
            About Us
          </Link>
        </li>
      </ul>
    );
  };

  loggedInList = () => {
    return (
      <ul className="navbar-nav ml-auto mr-4">
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/patient-list">
            Patient List
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/patient/register">
            Register
          </Link>
        </li>
      </ul>
    );
  };

  renderNavList = () => {
    if (this.state.loggedIn) {
      return this.loggedInList();
    } else {
      return this.mainList();
    }
  };

  render() {
    return (
      <div style={{ display: `${this.state.navbarDisplay}` }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            <img
              className="float-left"
              src="/images/healthcare-365-logo.png"
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {this.renderNavList()}
            {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
