import React from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url('/images/main-jumbotron.jpg')",
          backgroundSize: "100vw 100%",
          backgroundRepeat: "no-repeat",
          height: "60vh"
        }}
      >
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4 text-center my-4">
            <h1 className="display-4">Leave your worries on us!</h1>
            <Link to="/signUp" style={{ textDecoration: "none" }}>
              <button className="btn btn-dark btn-lg">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "13rem" }}>
            <div className="col-md-12">
              <h1 className="display-4 font-weight-bold text-center">
                Smart Powerful easy-to-use software
              </h1>
            </div>
          </div>
          <div className="container">
            <div className="row my-4">
              <div className="col-md-8">
                <h1>Lorem Ipsum</h1>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src="images/landing-page-text-image.jpg"
                  className="img-thumbnail"
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-4">
                <img
                  src="images/landing-page-text-image.jpg"
                  className="img-thumbnail"
                />
              </div>
              <div className="col-md-8">
                <h1>Lorem Ipsum</h1>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-8">
                <h1>Lorem Ipsum</h1>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src="images/landing-page-text-image.jpg"
                  className="img-thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
