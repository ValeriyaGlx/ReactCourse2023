import React from "react";
import Input from "./components/Input/Input";
import Textareas from "./components/Textarea/Textarea";
import FormProfile from "./components/FormProfile/FormProfile";
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
      },
      error: {
        name: "",
        surname: "",
        phone: "",
        link: "",
        about: "",
        stack: "",
        project: "",
        submit: "",
      },
    };
  }

  handleChange = (value, field) => {
    this.setState((prev) => {
      return {
        ...prev,
        [field]: value.trimStart(),
        error: { ...prev.error, submit: "" },
        textareaLength: {
          ...prev.textareaLength,
          [field]: value.length,
        },
      };
    });
  };

  phoneValidation = () => {
    if (this.state.phone.length < 12) {
      this.setState((prev) => {
        return {
          error: { ...prev.error, phone: "You should add all numbers" },
        };
      });
    } else {
      this.setState((prev) => {
        return {
          error: { ...prev.error, phone: "" },
        };
      });
    }
  };

  nameValidadion = (value) => {
    if (this.state[value].length === 0) {
      this.setState((prev) => {
        return {
          error: { ...prev.error, [value]: "This field is empty" },
        };
      });
    } else if (
      value !== "date" &&
      this.state[value][0] !== this.state[value][0].toUpperCase()
    ) {
      this.setState((prev) => {
        return {
          error: {
            ...prev.error,
            [value]: `You should start the ${value} with a capital letter`,
          },
        };
      });
    } else {
      this.setState((prev) => {
        return {
          error: {
            ...prev.error,
            [value]: "",
          },
        };
      });
    }
    return;
  };

  linkValidation = () => {
    if (this.state.link.length === 0) {
      this.setState((prev) => {
        return {
          error: { ...prev.error, link: "This field is empty" },
        };
      });
    } else if (this.state.link.substring(0, 8) !== "https://") {
      this.setState((prev) => {
        return {
          error: {
            ...prev.error,
            link: 'You should start the link with "https://"',
          },
        };
      });
    } else {
      this.setState((prev) => {
        return {
          error: { ...prev.error, link: "" },
        };
      });
    }
    return;
  };

  textareaValidation = (value) => {
    if (this.state[value].length === 0) {
      this.setState((prev) => {
        return {
          error: { ...prev.error, [value]: "This field is empty" },
        };
      });
    } else if (this.state[value].length > 600) {
      this.setState((prev) => {
        return {
          error: { ...prev.error, [value]: "Exceeded Symbol Limit" },
        };
      });
    } else {
      this.setState((prev) => {
        return { error: { ...prev.error, [value]: "" } };
      });
    }
    return;
  };

  validationAfterBlur = (e) => {
    switch (e.target.name) {
      case "name":
        this.nameValidadion("name");
        break;
      case "surname":
        this.nameValidadion("surname");
        break;
      case "date":
        this.nameValidadion("date");
        break;
      case "phone":
        this.phoneValidation();
        break;
      case "link":
        this.linkValidation();
        break;
      case "about":
        this.textareaValidation("about");
        break;
      case "stack":
        this.textareaValidation("stack");
        break;
      case "project":
        this.textareaValidation("project");
        break;
      default:
        return;
    }
  };

  handleReset = () => {
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
      },
      error: {
        name: "",
        surname: "",
        phone: "",
        link: "",
        about: "",
        stack: "",
        project: "",
      },
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const fields = Object.values(this.state);
    const errors = Object.values(this.state.error);
    fields.length = 8;
    if (errors.every((el) => el === "") && fields.every((el) => el !== "")) {
      this.setState((prev) => {
        return {
          ...prev,
          newForm: true,
          error: { ...prev.error, submit: "" },
        };
      });
    } else {
      this.setState((prev) => {
        return {
          error: {
            ...prev.error,
            submit: "You should fill all fields correctly",
          },
        };
      });
    }
  };

  render() {
    if (!this.state.newForm) {
      return (
        <form
          className="form"
          onSubmit={(e) => {
            this.onSubmit(e);
          }}
        >
          <h1 className="form-inner">Registration form</h1>
          <div className="form-main">
            <Input
              state={this.state}
              validationAfterBlur={this.validationAfterBlur}
              handleChange={this.handleChange}
              innerText={"Name:"}
              type={"text"}
              name={"name"}
              placeholder={"Enter Your Name"}
            />
            <Input
              state={this.state}
              validationAfterBlur={this.validationAfterBlur}
              handleChange={this.handleChange}
              innerText={"Surname:"}
              type={"text"}
              name={"surname"}
              placeholder={"Enter Your Surname"}
            />
            <Input
              state={this.state}
              validationAfterBlur={this.validationAfterBlur}
              handleChange={this.handleChange}
              innerText={"Birth Date:"}
              type={"date"}
              name={"date"}
            />
            <Input
              state={this.state}
              validationAfterBlur={this.validationAfterBlur}
              handleChange={this.handleChange}
              innerText={"Phone Number:"}
              type={"tel"}
              name={"phone"}
              placeholder={"Enter Your Phone Number"}
            />
            <Input
              state={this.state}
              validationAfterBlur={this.validationAfterBlur}
              handleChange={this.handleChange}
              innerText={"Website:"}
              type={"text"}
              name={"link"}
              placeholder={"Enter URL of Your Website"}
            />
            <Textareas
              state={this.state}
              handleChange={this.handleChange}
              validationAfterBlur={this.validationAfterBlur}
              innerText={"About Yourself:"}
              name={"about"}
              placeholder={"Tell about yourself"}
            />
            <Textareas
              state={this.state}
              handleChange={this.handleChange}
              validationAfterBlur={this.validationAfterBlur}
              innerText={"Technology Stack:"}
              name={"stack"}
              placeholder={"Tell About Your Technical Skills"}
            />
            <Textareas
              state={this.state}
              handleChange={this.handleChange}
              validationAfterBlur={this.validationAfterBlur}
              innerText={"Last Project:"}
              name={"project"}
              placeholder={"Describe Your Lastest Project"}
            />
          </div>
          <div className="error error-sbm">{this.state.error.submit}</div>
          <div className="btn-section">
            <button className="button" type="submit">
              Submit
            </button>
            <button
              className="button"
              type="reset"
              onClick={(e) => {
                this.handleReset(e);
              }}
            >
              Reset
            </button>
          </div>
        </form>
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
