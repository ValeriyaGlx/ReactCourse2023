import React from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Textareas from "./components/Textarea/Textarea";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <form className="form">
        <h1 className="form-inner">Registration form</h1>
        <div className="form-main">
          <Input
            innerText={"Name:"}
            type={"text"}
            name={"name"}
            placeholder={"Enter Your Name"}
          />
          <Input
            innerText={"Surname:"}
            type={"text"}
            name={"surname"}
            placeholder={"Enter Your Surname"}
          />
          <Input
            innerText={"Birth Date:"}
            type={"date"}
            name={"date"}
            placeholder={null}
          />
          <Input
            innerText={"Phone Number:"}
            type={"tel"}
            name={"phone"}
            placeholder={"Enter Your Phone Number"}
          />
          <Input
            innerText={"Website:"}
            type={"url"}
            name={"link"}
            placeholder={"Enter URL of Your Website"}
          />

          <Textareas
            innerText={"About Yourself:"}
            name={"about"}
            placeholder={"Tell About Yourself"}
          />
          <Textareas
            innerText={"Technology Stack:"}
            name={"stack"}
            placeholder={"Tell About Your Technical Skills"}
          />
          <Textareas
            innerText={"Last Project:"}
            name={"project"}
            placeholder={"Describe Your Lastest Project"}
          />
        </div>
        <div className="btn-section">
          <Button text={"Submit"} />;
          <Button text={"Cancel"} />;
        </div>
      </form>
    );
  }
}

export default App;
