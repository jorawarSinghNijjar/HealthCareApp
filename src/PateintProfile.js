import React from 'react'


class PatientProfile extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.patient.name)
    }
    render(){
        
        return (
            <div className="container mx-auto my-2">
                    <div className="card my-4 w-75 mx-auto shadow p-3 mb-5 bg-white rounded">
                        <div className="row">
                            <div className="col-sm">
                                <h1>{this.props.patient.name}</h1>
                                <p>Patient Id: {this.props.patient.id}</p>
                                <p>Symptoms: {this.props.patient.disease_type}</p>
                                <p>Doctor assigned: Dr.Yogesh Krotania</p>
                            </div>
                            <div className="col-sm text-center">
                                <img className="img-thumbnail" src="patient-icon.png" alt="profile-photo"></img>
                            </div>
                        </div>
                        <hr/>
                        <div className="row mt-3">
                            <div className="col-sm text-center">
                                <button className="btn btn-warning btn-lg">Edit</button>
                            </div>
                            <div className="col-sm text-center">
                                <button className="btn btn-danger btn-lg">Delete</button>
                            </div>
                
                        </div>

                    </div>
            </div>
        );
    }



} 

export default PatientProfile;