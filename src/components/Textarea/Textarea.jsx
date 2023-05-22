import React from "react";
import "./Textarea.css";
import { chooseValidation } from "../../utils/validation";

export default class Textareas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {textareaLength} = this.props.state
    const {name, innerText, handleChange, placeholder, validationAfterBlur} = this.props;
    const error =  'error' + ' ' + 'error-'+name;

    return (
      <div className="form-section">
        <label className="textarea-label" htmlFor={name}>
          {innerText}
        </label>
        <textarea
          onChange={(e) => {
            const eValue = chooseValidation(name, e.target.value);
            handleChange(eValue, name);
          }}
          onBlur={(e)=>{validationAfterBlur(e)}}
          className="textarea"
          placeholder={placeholder}
          id={name}
          name = {name}
          value={this.props.state[name]}
          rows="7"
        ></textarea>
        <span className="counter-text">
          <span>{textareaLength[name]}</span>/
          <span>600</span>
        </span>
        <div className={error}></div>
      </div>
    );
  }
}
