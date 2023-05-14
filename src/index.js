import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Inputs extends React.Component {
  render() {
    return (
      <div className="form-section">
        <label for={this.props.name}>{this.props.innerText}</label>
        <input
          placeholder={this.props.placeholder}
          id={this.props.name}
          type={this.props.type}
        ></input>
      </div>
    );
  }
}

class Textareas extends React.Component {
  render() {
    return (
      <div className="form-section">
        <label className="textarea-label" for={this.props.name}>
          {this.props.innerText}
        </label>
        <textarea
          className="textarea"
          placeholder={this.props.placeholder}
          id={this.props.name}
          rows="7"
        ></textarea>
      </div>
    );
  }
}

class Buttons extends React.Component {
    render() {
        return (
            <button className="button">{this.props.text}</button>
        )
    }
}

class Form extends React.Component {
  renderSectionInput(innerText, type, name, placeholder) {
    return (
      <Inputs
        innerText={innerText}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    );
  }

  renderSectionTextarea(innerText, name, placeholder) {
    return (
      <Textareas innerText={innerText} name={name} placeholder={placeholder} />
    );
  }

  renderButton(text) {
    return (
        <Buttons text = { text }/>
    )
  }

  render() {
    return (
      <form className="form">
        <h1 className="form-inner">Registration form</h1>
        <div className="form-main">
          {this.renderSectionInput("Name:", "text", "name", "Enter Your Name")}
          {this.renderSectionInput(
            "Surname:",
            "text",
            "surname",
            "Enter Your Surname"
          )}

          {this.renderSectionInput("Birth Date:", "date", "date", null)}
          {this.renderSectionInput("Phone Number:", "tel", "phone", "Enter Your Phone Number")}
          {this.renderSectionInput(
            "Website",
            "url",
            "link",
            "Enter URL of Your Website"
          )}

          {this.renderSectionTextarea(
            "About Yourself:",
            "about",
            "Tell About Yourself"
          )}
          {this.renderSectionTextarea(
            "Technology Stack:",
            "stack",
            "Tell About Your Technical Skills"
          )}
          {this.renderSectionTextarea(
            "Last Project:",
            "project",
            "Describe Your Lastest Project"
          )}
        </div>
        <div className = "btn-section">
            {this.renderButton('Submit')}
            {this.renderButton('Cancel')}
        </div>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);
