import { useState } from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import FormData from "../FormData/FormData";
import { chooseValidation, submitValidation } from "../../utils/validation";

const initialState = {
  name: "",
  surname: "",
  date: "",
  phone: "",
  link: "",
  about: "",
  stack: "",
  project: "",
};

const initialStateLength = {
  about: 0,
  stack: 0,
  project: 0,
};

const initialStateError = {
  name: " ",
  surname: " ",
  date: " ",
  phone: " ",
  link: " ",
  about: " ",
  stack: " ",
  project: " ",
};

const TEXTAREA_DATA = [
  {
    placeholder: "Tell about yourself",
    name: "about",
    innerText: "About Yourself:",
  },
  {
    placeholder: "Tell About Your Technical Skills",
    name: "stack",
    innerText: "Technology Stack:",
  },
  {
    placeholder: "Describe Your Lastest Project",
    name: "project",
    innerText: "Last Project:",
  },
];

const INPUTS_DATA = [
  {
    placeholder: "Enter Your Name",
    InnerText: "Name:",
    name: "name",
    type: "text",
  },

  {
    placeholder: "Enter Your Surname",
    InnerText: "Surname:",
    name: "surname",
    type: "text",
  },
  {
    placeholder: "",
    InnerText: "Birth Date:",
    name: "date",
    type: "date",
  },
  {
    placeholder: "Enter Your Phone Number",
    InnerText: "Phone Number:",
    name: "phone",
    type: "tel",
  },
  {
    placeholder: "Enter URL of Your Website",
    InnerText: "Website:",
    name: "link",
    type: "text",
  },
];

const InitialForm = (props) => {
  const [values, setValues] = useState(initialState);
  const [length, setLength] = useState(initialStateLength);
  const [error, setError] = useState(initialStateError);
  const [newform, setNewform] = useState(false);

  const handleChange = (value, field) => {
    setValues({ ...values, [field]: value });

    setLength({ ...length, [field]: value.length });

    setError({ ...error, [field]: chooseValidation(field, value)[1] });
  };

  const validationAfterBlur = (e) => {
    const newErr = chooseValidation(e.target.id, e.target.value)[1];
    setError({ ...error, [e.target.id]: newErr });
  };

  const onClick = (e) => {
    e.preventDefault();
    const errs = Object.values(error);
    const newErrors = { ...error };
    if (errs.filter((el) => el === " ")) {
      for (let err in newErrors) {
        if (newErrors[err] === " ") {
          newErrors[err] = "this field is empty";
        }
      }
      setError(newErrors);
    }
    if (Object.values(newErrors).every((el) => el === "")) {
      setNewform(true);
    }
  };

  const handleReset = () => {
    setValues(initialState);
    setLength(initialStateLength);
    setError(initialStateError);
  };

  if (newform) {
    return <FormData {...values} />;
  }

  return (
    <form className="form">
      <h1 className="form-inner">Registration form</h1>
      {INPUTS_DATA.map(({ placeholder, InnerText, name, type }) => (
        <Input
          name={name}
          placeholder={placeholder}
          InnerText={InnerText}
          type={type}
          key={name}
          value={values[name]}
          handleChange={handleChange}
          validationAfterBlur={validationAfterBlur}
          error={error[name]}
        />
      ))}
      {TEXTAREA_DATA.map(({ placeholder, name, innerText }) => (
        <Textarea
          name={name}
          key={name}
          placeholder={placeholder}
          InnerText={innerText}
          value={values[name]}
          length={length[name]}
          handleChange={handleChange}
          validationAfterBlur={validationAfterBlur}
          error={error[name]}
        />
      ))}

      <div className="btn-section">
        <button className="button" type="submit" onClick={(e) => onClick(e)}>
          Submit
        </button>
        <button className="button" type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default InitialForm;
