import React from "react";
import LoginPage from "./LoginPage";
import Patient from "./Patient";
import PatientList from "./PatientList";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginPage}></Route>
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/patient/register" component={Patient}></Route>
            <Route exact path="/patient-list" component={PatientList}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
