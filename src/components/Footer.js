import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "grey" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="text-center" style={{ listStyleType: "none" }}>
              <li>
              <h5 className="text-center">Type1</h5>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="text-center" style={{ listStyleType: "none" }}>
              <li>
              <h5 className="text-center">Type1</h5>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="text-center" style={{ listStyleType: "none" }}>
              <li>
              <h5 className="text-center">Type1</h5>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
                <li>
                  <Link style={{ color: "white" }}>Link1</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
