import React from 'react';
import Buttons from './components/buttons/buttons';
import Inputs from './components/inputs/inputs';
import Textareas from './components/textarea/textarea';
import './App.css';

class App extends React.Component {
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


export default App;
