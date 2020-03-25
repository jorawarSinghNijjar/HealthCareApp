import React from 'react';
import LoginPage from './LoginPage';
import Patient from './Patient';
import PatientList from './PatientList';
import Navbar from './Navbar';
import HomePage from './HomePage';
import { BrowserRouter, Route, Link }from 'react-router-dom';

class App extends React.Component{
    constructor(props){
        super(props)

        
    }
 
    render(){
        return (
            <div>
                    <BrowserRouter>
                        <Navbar/>
                        <Route exact path="/login" component={LoginPage}></Route>
                        <Route exact path="/home" component={HomePage}></Route>
                        <Route exact path="/patient/register" component={Patient}></Route>
                        <Route exact path="/patient-list" component={PatientList}></Route>
                    
                    </BrowserRouter>
            </div>  
            );
    }
}

export default App