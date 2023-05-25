import './Input.css'
import { chooseValidation } from "../../utils/validation";

const Input = (props) => {
    const {name, InnerText, type, placeholder, value, validationAfterBlur} = props
    const error =  'error' + ' ' + 'error-' + name;
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
                const eValue = chooseValidation(name, e.target.value);
                props.handleChange(eValue, name)}}
            onBlur={validationAfterBlur}
            />
            <div className={error}></div>
        </div>
    )
}

export default Input;