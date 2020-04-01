import React from "react";
import api from '../api/data_api';
import history from './history';

class SignUp extends React.Component {

  constructor(props)
{
  super(props);

  this.state = {
    userEmail: "",
    hospitalName: "",
    contactNumber: ""
  };
  this.welcomeMsg = {
    subject: "Welcome to the heatlcare-365 services!",
    text: "Hello Sir/Madam, this is an automated welcome message from our company healthcare-365",
    html: `
    <h1>
    Congrats ${this.state.hospitalName}! This is a welcome message! Congratulations you have signed up with Healthcare-365!
    </h1>
    <p>
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fwelcome-sign&psig=AOvVaw0LF3e39vPO0zCSxnUbay1z&ust=1585811981485000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOD_sJPYxugCFQAAAAAdAAAAABAE" alt="welcome"/>
    </p>`
  };

  
}
  

  sendMail = async (userEmail) => {
    await api.post('/send', { 
      userEmail: userEmail,
      subject: this.welcomeMsg.subject,
      text: this.welcomeMsg.text,
      html: this.welcomeMsg.html
     })
     .then(result => {
       console.log(result)
       history.push('/home');
     })
     .catch(err => console.log(err));
  }

  handleEmailChange = (e) => {
    e.preventDefault();
    this.setState({
      userEmail: e.target.value
    });
  }

  handleNameChange = (e) => {
    e.preventDefault();
    this.setState({
      hospitalName: e.target.value
    });
  }

  handleContactChange = (e) => {
    e.preventDefault();
    this.setState({
      contactNumber: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.sendMail(this.state.userEmail);
    
  }
  render() {
    return (
      <div>
        <div className="row">
          <img
            src="images/signUpBanner.jpg"
            style={{ height: "60vh", width: "100vw" }}
          ></img>
        </div>
        <div className="row my-4">
          <div className="col-md-8">
            <section className="mx-4">
              <h1 className="text-justify">Key characteristics of services</h1>
              <p>
                Health care is a broad term that pertains to a system that
                involves the maintenance and the improvement of medical services
                in order to cater the medical demands of the people. The ever
                growing demands of the people, particularly the patients, has
                been widely recognized and cannot be undermine. In fact, if we
                take a look back in the past centuries, the vast range of
                changes that has happened and continues to happen in the modern
                society is clearly seen globally. These kinds of changes involve
                the advancement of health care system and services that is a
                result of the innovation of technology. As the world population
                grows day by day, the importance of health is considered to be
                one of the top priorities in this modern society. Its Role In A
                Country
              </p>
            </section>
          </div>
          {/* sign up form */}

          <div className="col-md-4">
            <div className="card mr-4 border-0">
              <div
                className="text-center"
                style={{
                  backgroundColor: " #58668b",
                  color: "white",
                  height: "4rem",
                  fontFamily: "'Fjalla One', sans-serif"
                }}
              >
                <h2 className="card-title text-center my-2">Get Started !</h2>
              </div>
              <div className="card-body" style={{ backgroundColor: "#ebf4f6" }}>
                <div
                  className="text-center"
                  style={{ border: "4px solid #5e5656" }}
                >
                  <h1>
                    <span style={{ color: "#BC243C" }}>FREE</span> trial access
                    for 30 days
                  </h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Hospital Name</label>
                    <input className="form-control" type="text" value={this.state.hospitalName} name="hospital-name" onChange={this.handleNameChange} placeholder="Enter Hospital name here"></input>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input className="form-control" name="email" value={this.state.userEmail} type="email" onChange={this.handleEmailChange} placeholder="Enter hospital's email address"></input>
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input className="form-control" name="contact-number" value={this.state.contactNumber} type="number" onChange={this.handleContactChange} placeholder="Enter phone number for hospital"></input>
                  </div>
                  <div className="form-group">
                    <label>Subscription type</label>
                    <select className="form-control" name="subscription" placeholder="Select subscription type">
                      <option>Basic</option>
                      <option>Standard</option>
                      <option>Premium</option>
                      <option>Large Scale Buisness</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-success">
                      Try Now!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
