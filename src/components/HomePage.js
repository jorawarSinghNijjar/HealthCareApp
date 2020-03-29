import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid" style={{backgroundImage: 'url("/images/homepage.jpg")', height: '100vh', backgroundSize:'cover'}}>
        <div className="container">
          <h1 className="display-4">Welcome to our Health care service!</h1>
          <p className="lead">
            We care for the employees and provide user friendly applications!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
