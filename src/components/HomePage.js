import React from "react";
import {Link} from 'react-router-dom';
import homepageBackground from '../images/homepage.jpg';
const HomePage = () => {
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          background: 'rgb(255,255,255)',
          background: `linear-gradient(321deg, rgba(255,255,255,.5) 0%, rgba(126,126,224,0.7147058652562588) 90%), url(${homepageBackground})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row p-4">
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
