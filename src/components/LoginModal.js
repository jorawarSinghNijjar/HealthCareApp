import React from "react";
import { Animated } from "react-animated-css";
import history from "./history";
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import '../css/alert.css';

const validate = (inputVal, correctVal) => {
  if (inputVal !== correctVal) {
    return false;
  }
  return true;
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.emp = {
      id: "123",
      password: "123"
    };
    this.state = {
      value: "",
      showModal: true,
      showMessage: false,
      loggedIn: false,
      current: this.props.config.id,
      showDemoModal: true
    };


    // alert("Login ID: 123 and Password: 123");
  }

  handleDemoModalClose = () => {
    this.setState({
      showDemoModal: false
    });
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
  };

  onLoginClick = e => {
    e.preventDefault();
    if (!validate(this.state.value, this.emp.id)) {
      console.log("incorrect id");
      this.setState({ showMessage: true });
      return false;
    }

    console.log("correct id");
    this.setState({ showMessage: false, showModal: false });
    if (this.state.current === "employeeId") {
      history.push("/login/pwd");
    }

    if (this.state.current === "password") {
      history.push("/home");
    }
  };

  render() {
    return (
      <div>
        <Modal show={this.state.showDemoModal} onHide={this.handleDemoModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Demo Details</Modal.Title>
          </Modal.Header>
          <Modal.Body><p><strong>Employee ID:</strong> 123</p>
            <p><strong>Password:</strong> 123</p></Modal.Body>
        </Modal>
        <Animated
          animationIn="fadeInLeft"
          animationOut="fadeOutRight"
          isVisible={this.state.showModal}
        >
          <div className="row mt-30">
            <div className="col-md-4 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">Log in</h3>
                  <hr />
                  <form
                    className="needs-validation"
                    onSubmit={this.onLoginClick}
                    noValidate
                  >
                    <div className="form-group">
                      <label htmlFor={this.props.config.name}>
                        {this.props.config.label}
                      </label>

                      <input
                        className="form-control input-validate"
                        name={this.props.config.name}
                        type={this.props.config.type}
                        id={this.props.config.id}
                        value={this.state.value}
                        placeholder={this.props.config.placeholder}
                        onChange={this.handleInput}
                        style={{
                          borderColor: this.state.showMessage ? "red" : "grey"
                        }}
                        required
                      />
                      <Animated
                        animationIn="fadeInDown"
                        isVisible={this.state.showMessage}
                      >
                        <small className="text-danger">
                          {this.props.config.label} is incorrect
                        </small>
                      </Animated>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-dark btn-block">
                        {this.props.config.buttonText}
                      </button>
                    </div>
                    <div className="form-group">
                      <Link to="/signUp" style={{ textDecoration: "none" }}>
                        <button className="btn btn-warning btn-block">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    );
  }
}

export default Login;
