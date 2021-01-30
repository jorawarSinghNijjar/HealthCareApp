import React from "react";
import { Link } from "react-router-dom";
import headerImage from '../images/main-jumbotron.jpg';
import textImage1 from "../images/landing-page-text-image1.jpg";
import textImage2 from "../images/landing-page-text-image2.jpg";
import textImage3 from "../images/landing-page-text-image3.jpg";
import '../css/landingPage.css';

class LandingPage extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "55vh"
        }}
      >
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4 text-center my-4">
            <h1 className="display-4">Leave your worries on us!</h1>
            <Link to="/signUp" style={{ textDecoration: "none" }}>
              <button className="btn btn-info btn-lg">Get Started</button>
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
            <div className="row my-4 para">
              <div className="col-md-8 text-box">
                <h1>Drive Efficiency and Engagement</h1>
                <p className="text-justify">
                Healthcare's health management software simplifies tasks, increases efficiency, and improves the engagement of your front-line staff with automated tasks, real-time notifications, bulletins, and easy-to-use, natively-mobile tools.
                </p>
              </div> 
              <div className="col-md-4 img-box">
                <img
                  src={textImage1}
                  className="img-thumbnail"
                />
              </div>
            </div>
            <div className="row my-4 para">
              <div className="col-md-8 text-box">
                <h1>Data Driven Decisions</h1>
                <p className="text-justify">
                Best-in-class reporting and dashboarding platform gives you the insights and information you need to uphold the highest Quality standards. By getting real-time data on hospital-acquired infections and achieving compliance on your surgical safety checklists, you can make stronger critical decisions that lead to continuous improvements in patient care.
                </p>
              </div>
              <div className="col-md-4 img-box">
                <img
                  src={textImage2}
                  className="img-thumbnail"
                />
              </div>
            </div>
            <div className="row my-4 para">
              <div className="col-md-8 text-box">
                <h1>Services</h1>
                <p className="text-justify">
                That’s why we created an innovative, end-to-end business solution designed specifically for rehab therapy professionals and coupled it with elite-quality education and support. Healthcare 365 gives every rehab therapy business—from single-therapist clinics to multi-location enterprises—the tools and knowledge necessary to maximize performance, revenue, and patient outcomes.
                </p>
              </div>
              <div className="col-md-4 img-box">
                <img
                  src={textImage3}
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
