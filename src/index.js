import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import FloatingLabelInput from "react-floating-label-paper-input";

class FloatingLabelTextExample extends Component {
  constructor(props) {
    super(props);
    this.getValidationMessages = this.getValidationMessages.bind(this);
    this.state = {
      formData: {}
    };
  }
  getValidationMessages(key) {
    return `${key} is require`;
  }
  handleForm(key, value) {
    this.setState({
      formData: Object.assign({}, this.state.formData, { [key]: value })
    });
  }
  render() {
    var options = [
      { label: "Gujarat", value: "GJ" },
      { label: "Maharastra", value: "MH" },
      { label: "Karnataka", value: "KA" },
      { label: "Telangana", value: "TS" },
      { label: "Andhra Pradesh", value: "AP" }
    ];
    return (
      <div className={"common-form-style"}>
        <div className="form-group">
          <FloatingLabelInput
            type={"text"}
            labelName={"Firstname"}
            onChange={e => {
              e.preventDefault();
              this.handleForm("firstname", e.currentTarget.value);
            }}
            name={"firstname"}
            value={
              this.state.formData.firstname ? this.state.formData.firstname : ""
            }
            errorMessage={this.getValidationMessages("firstname")}
          />
        </div>
        <div className="form-group">
          <FloatingLabelInput
            type={"inputMask"}
            maskChar={" "}
            mask={"99-99-9999"}
            labelName={"Date of birth"}
            placeholder={"MM-DD-YYYYY"}
            onChange={e => {
              e.preventDefault();
              this.handleForm("dob", e.currentTarget.value);
            }}
            name={"dob"}
            value={this.state.formData.dob ? this.state.formData.dob : ""}
            errorMessage={this.getValidationMessages("dob")}
          />
        </div>
        <div className="form-group">
          <FloatingLabelInput
            type={"select"}
            options={options}
            labelName={"State"}
            onChange={e => {
              e.preventDefault();
              this.handleForm("state", e.currentTarget.value);
            }}
            name={"state"}
            value={this.state.formData.state ? this.state.formData.state : ""}
            errorMessage={this.getValidationMessages("state")}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FloatingLabelTextExample />, rootElement);
