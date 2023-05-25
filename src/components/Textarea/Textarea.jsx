import './Textarea.css'
import { chooseValidation } from "../../utils/validation";

const Textarea = (props) => {
    const {name, InnerText, placeholder, value, validationAfterBlur, length} = props;
    const error =  'error' + ' ' + 'error-' + name;
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
            const eValue = chooseValidation(name, e.target.value);
            props.handleChange(eValue, name)}}
          onBlur={validationAfterBlur}
        ></textarea>
          <span className="counter-text">
          <span>{length}</span>/
          <span>600</span>
        </span>
        <div className={error}></div>
        </div>
    )
}

export default Textarea;