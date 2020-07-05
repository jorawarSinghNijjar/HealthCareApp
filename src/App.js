import React from "react";
import LoginPage from "./components/LoginPage";
import Patient from "./components/Patient";
import PatientList from "./components/PatientList";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./components/history";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    loggedIn: true
  };

  render() {
    return (
      <div>
        <Router history={history}>
          <Navbar loggedIn={this.state.loggedIn ? true : false} />
          <Switch>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/login/pwd">
              <Redirect to="/login/pwd" />
              <LoginPage passwordForm />
            </Route>
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/patient/register">
              <Patient submitButtonText="Register" />
            </Route>
            <Route
              path="/patient/edit/:id"
              render={({ match }) => (
                <Patient match={match} editMode submitButtonText="Update" />
              )}
            ></Route>
            <Route exact path="/patient-list" component={PatientList}></Route>
            <Route exact path="/signUp" component={SignUp}></Route>
            <Route path="/" component={LandingPage}></Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}

export default App;
