import React from "react";
import Input from "../Input/Input";
import Textareas from "../Textarea/Textarea";

export default class InitialForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <form
      className="form"
      onSubmit={(e) => {
        this.props.onSubmit(e);
      }}
    >
      <h1 className="form-inner">Registration form</h1>
      <div className="form-main">
        <Input
          state={this.props.state}
          validationAfterBlur={this.props.validationAfterBlur}
          handleChange={this.props.handleChange}
          innerText={"Name:"}
          type={"text"}
          name={"name"}
          placeholder={"Enter Your Name"}
        />
        <Input
          state={this.props.state}
          validationAfterBlur={this.props.validationAfterBlur}
          handleChange={this.props.handleChange}
          innerText={"Surname:"}
          type={"text"}
          name={"surname"}
          placeholder={"Enter Your Surname"}
        />
        <Input
          state={this.props.state}
          validationAfterBlur={this.props.validationAfterBlur}
          handleChange={this.props.handleChange}
          innerText={"Birth Date:"}
          type={"date"}
          name={"date"}
        />
        <Input
          state={this.props.state}
          validationAfterBlur={this.props.validationAfterBlur}
          handleChange={this.props.handleChange}
          innerText={"Phone Number:"}
          type={"tel"}
          name={"phone"}
          placeholder={"Enter Your Phone Number"}
        />
        <Input
          state={this.props.state}
          validationAfterBlur={this.props.validationAfterBlur}
          handleChange={this.props.handleChange}
          innerText={"Website:"}
          type={"text"}
          name={"link"}
          placeholder={"Enter URL of Your Website"}
        />
        <Textareas
          state={this.props.state}
          handleChange={this.props.handleChange}
          validationAfterBlur={this.props.validationAfterBlur}
          innerText={"About Yourself:"}
          name={"about"}
          placeholder={"Tell about yourself"}
        />
        <Textareas
          state={this.props.state}
          handleChange={this.props.handleChange}
          validationAfterBlur={this.props.validationAfterBlur}
          innerText={"Technology Stack:"}
          name={"stack"}
          placeholder={"Tell About Your Technical Skills"}
        />
        <Textareas
          state={this.props.state}
          handleChange={this.props.handleChange}
          validationAfterBlur={this.props.validationAfterBlur}
          innerText={"Last Project:"}
          name={"project"}
          placeholder={"Describe Your Lastest Project"}
        />
      </div>
      <div className="btn-section">
        <button className="button" type="submit">
          Submit
        </button>
        <button
          className="button"
          type="reset"
          onClick={(e) => {
            this.props.handleReset(e);
          }}
        >
          Reset
        </button>
      </div>
    </form>
    );
  }
}
