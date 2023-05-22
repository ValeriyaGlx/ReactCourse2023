import React from "react";
import Input from "./components/Input/Input";
import Textareas from "./components/Textarea/Textarea";
import FormProfile from "./components/FormProfile/FormProfile";
import InitialForm from "./components/InitialForm/InitialForm";
import { blurValidation, submitValidation, resetErrors, changeValidation } from "./utils/validation";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      date: "",
      phone: "",
      link: "",
      about: "",
      stack: "",
      project: "",
      newForm: false,
      textareaLength: {
        about: 0,
        stack: 0,
        project: 0,
      }
    };
  }

  handleChange = (value, field) => {
    this.setState((prev) => {
      return {
        ...prev,
        [field]: value,
        textareaLength: {
          ...prev.textareaLength,
          [field]: value.length,
        },
      };
    });
  };

  validationAfterBlur = (e) => {
    blurValidation(e.target.value, e.target.id);
  };

  handleReset = () => {
    resetErrors();
    this.setState({
      name: "",
      surname: "",
      date: "",
      phone: "",
      link: "",
      about: "",
      stack: "",
      project: "",
      newForm: false,
      textareaLength: {
        about: 0,
        stack: 0,
        project: 0,
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    for(let el in this.state){
      submitValidation(el,this.state[el])
      if(el==='project'){break}
    }
    const test = changeValidation();
    if(test===0){
      this.setState((prev) => {
        return {
          ...prev,
          newForm: true,
        };
      });
    };
  }

  render() {
    if (!this.state.newForm) {
      return (
        <InitialForm
        state={this.state}
        validationAfterBlur={this.validationAfterBlur}
        handleReset={this.handleReset}
        onSubmit={this.onSubmit}
        handleChange={this.handleChange}
        />
      );
    } else {
      return (
        <FormProfile
          name={this.state.name}
          surname={this.state.surname}
          date={this.state.date}
          phone={this.state.phone}
          link={this.state.link}
          about={this.state.about}
          stack={this.state.stack}
          project={this.state.project}
        />
      );
    }
  }
}

export default App;
