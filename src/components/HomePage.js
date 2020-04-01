import React from "react";
import {Link} from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          backgroundImage: 'url("/images/homepage.jpg")',
          height: "100vh",
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="row">
          <h1 className="display-4">Welcome to our Health care service!</h1>
          <p className="lead">
            We care for the employees and provide user friendly applications!
          </p>
          </div>
          <div className="row">
            <div className="col-md-6 my-4">
              <Link to="/patient/register" style={{textDecoration:"none"}}>
              <button className="btn btn-success btn-lg btn-block">
                Register a Patient
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
