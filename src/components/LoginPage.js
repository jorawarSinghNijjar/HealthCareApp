import React from "react";

import Login from "./LoginModal";
import '../css/main.css';

import loginBackground from '../images/login-background.jpg';

class LoginPage extends React.Component {
  constructor(props){
    super(props);
    console.log(props);

    

    this.employeeIdConfig = {
      label: "Employee ID",
      placeholder: "Enter Employee Id here",
      id: "employeeId",
      name: "employeeId",
      type: "text",
      buttonText: "Next"
    };

    this.passwordConfig = {
      label: "Password",
      placeholder: "Enter Password here",
      id: "password",
      name: "password",
      type: "password",
      buttonText: "Login"
    };

  }

  renderModal = () => { 
    if(this.props.passwordForm){
      return <Login config={this.passwordConfig} />;
    }
    else{
      return <Login config={this.employeeIdConfig} />;
    }
  }


  render() {

    return (
      <div className="login-page" >
        
        {this.renderModal()}
      </div>
    );
  }
}

export default LoginPage;
