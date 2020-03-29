import React from "react";
import Fade from "react-reveal/Fade";
import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.emp = {
      id: 201,
      password: "hello"
    };
    this.state = {
      showModal: true,
      label: "Employee ID",
      placeholder: "Enter Employee Id here",
      id: "employeeId",
      name: "employeeId",
      type: "text",
      value: "",
      valid: false,
    };
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
  };

  validate = () => {
    console.log(typeof this.emp.id);
    if (this.state.id === "employeeId") {
      if (this.state.value == this.emp.id) {
        console.log("correct id");
        this.setState({
          valid: true
        });
      }
    } else if (this.state.id === "password") {
      if (this.state.value === this.emp.password) {
        console.log("correct password");
        this.setState({
          valid: true
        });
      }
    } else {
      this.setState({
        valid: false
      });
    }
  };

  onLoginClick = e => {
    e.preventDefault();
    this.validate();
    if (this.state.valid) {
      this.setState({
        showModal: false
      });

      setTimeout(() => {
        this.setState({
          showModal: true,
          label: "Password",
          placeholder: "Enter Password here",
          id: "password",
          name: "password",
          type: "password"
        });
      }, 1000);
    }

    // e.target.className += "was-validated";
  };

  render() {
    return (
      <div>
        <Fade left opposite when={this.state.showModal} collapse>
          <div className="card mx-auto mt-30" style={{ width: "30%" }}>
            <div className="card-body">
              <div className="">
                <h3 className="card-title text-center">Log in</h3>
                <hr />
                <form className="needs-validation" noValidate>
                  <div className="form-group">
                    <label htmlFor={this.state.name}>{this.state.label}</label>
                    <input
                      className="form-control"
                      name={this.state.name}
                      type={this.state.type}
                      id={this.state.id}
                      value={this.state.value}
                      placeholder={this.state.placeholder}
                      onChange={this.handleInput}
                      required
                    />
                    <div className="valid-feedback">This is incorrect</div>
                  </div>
                  <div className="form-group">
                    <Link to="/home">
                      <button
                        type="submit"
                        className="btn btn-dark btn-block"
                        onClick={this.onLoginClick}
                      >
                        Next
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Login;
