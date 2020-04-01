import React from "react";
import PatientListItem from "./PatientListItem";
import api from "../api/data_api";
import PatientProfile from './PateintProfile';


class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientList: [],
      currentPatientId: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await api
      .get("/patients")
      .then(result => {
        this.setState({
          patientList: result.data.data
        });
      })
      .catch(err => console.log(err));
  };

  handleClick = e => {
    e.preventDefault();
    
  };

  callback = (id) =>{
    this.setState({
      currentPatientId: id
    })
  }

  renderPatientList() {
    return this.state.patientList.map(patient => {
      return (
      <PatientListItem patient={patient} callback={this.callback}/>
      );
    });
  }

  renderPatientProfile(){
    return this.state.patientList.map(patient => {
      if(patient.id === this.state.currentPatientId)
      return (
        <PatientProfile patient={patient}/>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-sm">
            <h1 className="text-left">Patient List</h1>
          </div>
          <div className="col-sm">
            <form className="mx-auto">
              <div className="form-group my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Patient"
                ></input>
              </div>
            </form>
          </div>
        </div>
        <div style={{border:"2px solid #01295f"}}></div>
        <div className="row my-4">
          <div className="col-md-3">
            <div
              className="list-group"
              style={{cursor:"pointer"}}
              onClick={this.handleClick}
            >
              {this.renderPatientList()}
            </div>
          </div>
          <div className="col-md-9">
            {this.renderPatientProfile()}
          </div>
        </div>
      </div>
    );
  }
}
export default PatientList;
