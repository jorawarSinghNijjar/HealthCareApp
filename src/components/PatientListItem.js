import React from "react";


class PatientListItem extends React.Component {

  handleClick = e => {
    e.preventDefault();
    
    this.props.callback(this.props.patient.id);
    
  }
 
  render() {
    return (
      <div className="list-group-item list-group-item-action" id="list-item" onClick={this.handleClick}>
        {this.props.patient.name}
      </div>
    );
  }
}

export default PatientListItem;
