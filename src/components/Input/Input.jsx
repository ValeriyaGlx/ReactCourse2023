import './Input.css'
import { chooseValidation } from "../../utils/validation";

const Input = (props) => {
    const {name, InnerText, type, placeholder, value, validationAfterBlur, error} = props
    const errorClass =  'error' + ' ' + 'error-' + name;
    return (
        <div className="form-section">
            <label htmlFor={name}>
                {InnerText}
            </label>
            <input
            type = {type || 'text'}
            placeholder={placeholder}
            id={name}
            value = {value}
            onChange={(e) => {
                const eValue = chooseValidation(name, e.target.value)[0];
                props.handleChange(eValue, name)}}
            onBlur={validationAfterBlur}
            />
            <div className={errorClass}>{error}</div>
        </div>
    )
}

export default Input;