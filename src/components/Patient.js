import React from "react";
import api from '../api/data_api';
import  history from './history';
import {Animated} from 'react-animated-css';
import {Link} from 'react-router-dom';
import {checkName, checkPhoneNumber} from '../util/regExValidation';



class Patient extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            phoneNumber: "",
            diseaseType: "",
            alertMessage: "",
            errMessageName: "",
            errMessagePhoneNumber: "",
            errMessageDiseaseType: "",
            showErrMessageName:false,
            showErrMessagePhoneNumber:false,
            showErrMessageDiseaseType:false
          };
        // this.alertRef = React.createRef();
    }
    
    // showAlert = (message) => {
    //     this.setState({alertMessage: message});
    //     this.alertRef.current.style.display = "block";
    //     setTimeout(() => {
    //         this.alertRef.current.style.display="none";
    //     },2000);
        
    // }
    componentDidMount(){
      
      if(this.props.editMode){
        this.populateFields();
      }
    }

    populateFields = async () => {
      await api.get(`/patient/${this.props.match.params.id}`)
      .then(result => {
        let patient = result.data.data[0];
        this.setState({
          name: patient.name,
          phoneNumber: patient.phone_number,
          diseaseType: patient.disease_type
        });
      })
      .catch(err => console.log(err));

    }

    handleNameInput = e => {
        e.preventDefault();
        this.setState({
        name: e.target.value,
        showErrMessageName:false
    });
  };

  handlePhoneNumberInput = e =>{
    e.preventDefault();
    this.setState({
      phoneNumber: e.target.value,
      showErrMessagePhoneNumber:false
    });
  }

  handleDiseaseTypeInput = e =>{
    e.preventDefault();
  
    this.setState({
      diseaseType: e.target.value,
      showErrMessageDiseaseType:false
    });
  }



  validate = () => {
    let valid = true;
    if(this.state.name === ""){ 
      this.setState({
        errMessageName: "Name cannot be empty",
        showErrMessageName:true
      }); 
      valid = false;
    }

    if(this.state.phoneNumber === ""){
      this.setState({
        errMessagePhoneNumber: "Phone number cannot be empty",
        showErrMessagePhoneNumber:true
      }); 
      valid = false;
    }
    if(this.state.diseaseType === ""){
      this.setState({
        errMessageDiseaseType: "Field cannot be empty",
        showErrMessageDiseaseType:true
      }); 
      valid = false;
    }

    // if(!checkName(this.state.name)){
      
    //   this.setState({
    //     errMessageName: "Please enter a valid name",
    //     showErrMessageName:true
    //   }); 
    //   valid = false;
    // }
    // else{
      
    //   this.setState({
    //     showErrMessageName:false
    //   }); 
    //   valid = true;
    // }

    // if(!checkPhoneNumber(this.state.phoneNumber)){
    //   this.setState({
    //     errMessagePhoneNumber: "Please enter a valid phone number!",
    //     showErrMessagePhoneNumber:true
    //   }); 
    //   valid = false;
    // }
    // else{
    //   this.setState({
    //     showErrMessagePhoneNumber:false
    //   }); 
    //   valid = true;
    // }

    return valid;
  }

  onSubmit = async (e) => {
    e.preventDefault();
    console.log(checkName(this.state.name))
    if(!this.validate()){
      e.stopPropagation();
      return false;
    }
    let data = [this.state.name,this.state.phoneNumber,this.state.diseaseType];
    await api.post('/patient',{ data })
    .then(result => {
        if(!result.data.error){
            // this.showAlert(result.data.message);
            history.push('/patient-list');
        }
    })
    .catch(err => console.log(err));
  }

  render() {  
    return (
      <div className="container">
        {/* <div className="alert alert-success" ref={this.alertRef}>{this.state.alertMessage}</div> */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card my-4 shadow p-3 mb-5 bg-white rounded">  
              <div className="card-body">
              <h1 className="card-title text-center">Patient Detail</h1>
                <form id="patient-form" className="mx-auto" onSubmit={this.onSubmit}>
                  <div className="form-group col-md">
                    <label htmlFor="name">Name: </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      onChange={this.handleNameInput}
                      value={this.state.name}
                    />
                    <Animated
                        animationIn="fadeInDown"
                        isVisible={this.state.showErrMessageName}
                      >
                        <small className="text-danger">
                          {this.state.errMessageName}
                        </small>
                    </Animated>
                  </div>
                  <div className="form-group col-md">
                    <label htmlFor="phone-number">Phone number: </label>
                    <input
                      type="text"
                      name="phone-number"
                      className="form-control"
                      placeholder="Phone number"
                      onChange={this.handlePhoneNumberInput}
                      value={this.state.phoneNumber}
                    ></input>
                     <Animated
                        animationIn="fadeInDown"
                        isVisible={this.state.showErrMessagePhoneNumber}
                      >
                        <small className="text-danger">
                          {this.state.errMessagePhoneNumber}
                        </small>
                    </Animated>
                  </div>
                  <div className="form-group col-md">
                    <label htmlFor="disease-type">Type of diseases: </label>
                    <input
                      type="text"
                      name="disease-type"
                      className="form-control"
                      placeholder="Enter disease type like: stomach pain, fever"
                      onChange={this.handleDiseaseTypeInput}
                      value={this.state.diseaseType}
                    ></input>
                     <Animated
                        animationIn="fadeInDown"
                        isVisible={this.state.showErrMessageDiseaseType}
                      >
                        <small className="text-danger">
                          {this.state.errMessageDiseaseType}
                        </small>
                    </Animated>
                  </div>
                  <div className="form-group text-center col-md">
                    <button
                      className="btn btn-block my-2"
                      type="submit"
                      style={{backgroundColor: "#01295f", color:"white"}}
                    >
                      {this.props.submitButtonText}
                    </button>
                    <Link to="/home" style={{textDecoration: "none"}}>
                      <button className="btn btn-danger btn-block my-2" type="button">Cancel</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Patient;
