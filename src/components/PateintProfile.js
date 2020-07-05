import React from 'react';
import api from "../api/data_api";
import {Link} from 'react-router-dom';
import patientPhoto from '../images/patient-icon.png';

class PatientProfile extends React.Component{
    constructor(props){
        super(props);

    }

    handleDelete = async () =>{
        await api.delete('/patient',{
            params:{
                id: this.props.patient.id
            }       
        }).then(result => {
            console.log("Deleted successfully");
            window.location.reload();
        })
        .catch(err => console.log(err));
    }


    render(){
        
        return (
            <div className="container mx-auto">
                    <div className="card w-100 mx-auto my-2 shadow p-3 mb-5 bg-white rounded">
                        <div className="row">
                            <div className="col-sm">
                                <h3>{this.props.patient.name}</h3>
                                <p><strong>Patient Id:</strong> {this.props.patient.id}</p>
                                <p><strong>Symptoms:</strong> {this.props.patient.disease_type}</p>
                                <p><strong>Contact:</strong> {this.props.patient.phone_number}</p>
                                <p><strong>Doctor assigned:</strong> Dr.Yogesh Krotania</p>
                            </div>
                            <div className="col-sm text-center">
                                <img className="img-thumbnail" src={patientPhoto} alt="patient" style={{height:"10rem"}}></img>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm my-1">
                                <Link to={`/patient/edit/${this.props.patient.id}`} style={{textDecoration:"none"}}>
                                <button className="btn btn-warning btn-md btn-block"><i className="fas fa-edit mr-1"></i>Edit</button>
                                </Link>
                            </div>
                            <div className="col-sm my-1">
                                <button className="btn btn-dark btn-md btn-block" onClick={() => window.print()}><i className="fas fa-print mr-1"></i>Print</button>
                            </div>
                            <div className="col-sm my-1">
                                <button className="btn btn-danger btn-md btn-block" onClick={this.handleDelete}><i className="far fa-trash-alt mr-1"></i>Delete</button>
                            </div>
                
                        </div>

                    </div>
            </div>
        );
    }



} 

export default PatientProfile;