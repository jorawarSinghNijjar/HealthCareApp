import React from "react";
import PatientListItem from "./PatientListItem";
import api from "../api/data_api";

class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientList: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await api
      .get("/patients")
      .then(result => {
        console.log(result.data.data);
        this.setState({
          patientList: result.data.data
        });
      })
      .catch(err => console.log(err));
  };

  handleClick = e => {
    e.preventDefault();
    // console.log(e.target);
  };

  renderPatientList() {
    return this.state.patientList.map(patient => {
      return <PatientListItem patient={patient} />;
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
        <div className="row">
          <div className="col-sm">
            <div
              className="accordion"
              id="accordion"
              onClick={this.handleClick}
            >
              {this.renderPatientList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PatientList;
