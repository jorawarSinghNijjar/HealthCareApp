import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarDisplay: this.props.loggedIn ? "display" : "none"
    };
  }

 
  
  render() {
    return (
      <div style={{display: `${this.state.navbarDisplay}`}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            
            <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/patient-list">
              Patient List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/patient/register">
              Register
            </Link>
          </li>
        </ul>
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
