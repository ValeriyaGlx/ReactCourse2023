import React from "react";
import "./Input.css";
import { chooseValidation } from "../../utils/validation";

export default class Input extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {name, innerText, handleChange, validationAfterBlur, placeholder, type} = this.props;
    const error =  'error' + ' ' + 'error-'+name;

    return (
      <div className="form-section">
        <label htmlFor={name}>{innerText}</label>
        <input
          onBlur={(e) => {
            validationAfterBlur(e)}}
          onChange={(e) => {
            const eValue = chooseValidation(name, e.target.value);
            handleChange(eValue, name);
          }}
          placeholder={placeholder}
          id={name}
          type={type}
          name={name}
          value={this.props.state[name]}
        ></input>
        <div className={error} ></div>
      </div>
    );
  }
}

//29 {error[name]}
