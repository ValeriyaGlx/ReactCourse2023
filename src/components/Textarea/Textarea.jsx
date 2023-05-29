import './Textarea.css'
import { chooseValidation } from "../../utils/validation";

const Textarea = (props) => {
    const {name, InnerText, placeholder, value, validationAfterBlur, length, error} = props;
    const errorClass =  'error' + ' ' + 'error-' + name;
    return(
        <div className="form-section">
        <label className="textarea-label" htmlFor={name}>
          {InnerText}
        </label>
        <textarea
          className="textarea"
          placeholder={placeholder}
          id={name}
          name = {name}
          value = {value}
          rows="7"
          onChange={(e) => {
            const eValue = chooseValidation(name, e.target.value)[0];
            props.handleChange(eValue, name)}}
          onBlur={validationAfterBlur}
        ></textarea>
          <span className="counter-text">
          <span>{length}</span>/
          <span>600</span>
        </span>
        <div className={errorClass}>{error}</div>
        </div>
    )
}

export default Textarea;