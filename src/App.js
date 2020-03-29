import React from "react";
import LoginPage from "./components/LoginPage";
import Patient from "./components/Patient";
import PatientList from "./components/PatientList";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from './components/history';

class App extends React.Component {


  render() {
    return (
      <div>
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginPage}></Route>
            <Route exact path="/login">
              <Redirect to="/login" /><LoginPage passwordForm />
            </Route> 
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/patient/register" component={Patient}></Route>
            <Route exact path="/patient-list" component={PatientList}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
