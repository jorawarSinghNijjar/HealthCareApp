import React from "react";
import PatientProfile from './PateintProfile';

class PatientListItem extends React.Component {
 
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-header">
          <h2>
            <button
              className="btn btn-block"
              type="button"
              data-toggle="collapse"
              data-target={`#item-${this.props.patient.id}`}
            >
              {this.props.patient.name}
            </button>
          </h2>
        </div>
        <div
          id={`item-${this.props.patient.id}`}
          className="collapse"
          data-parent="#accordion"
        >
          <div className="card-body">
            <PatientProfile patient={this.props.patient}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientListItem;
