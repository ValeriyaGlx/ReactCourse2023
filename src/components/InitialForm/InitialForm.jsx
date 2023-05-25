import { useState } from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import FormData from "../FormData/FormData";
import { blurValidation, submitValidation } from '../../utils/validation'

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
  const [values, setValues] = useState({
    name: "",
    surname: "",
    date: "",
    phone: "",
    link: "",
    about: "",
    stack: "",
    project: "",
  });

  const [length, setLength] = useState({
      about: 0,
      stack: 0,
      project: 0,
  })

  const handleChange = (value, field) => {
    setValues({ ...values,
      [field]: value,
    });

    setLength({ ...length,
    [field]: value.length
    })
  };

  const validationAfterBlur = (e) => {
    blurValidation(e.target.value, e.target.id);
  };

  const handleReset = () => {
    setValues({
      name: "",
      surname: "",
      date: "",
      phone: "",
      link: "",
      about: "",
      stack: "",
      project: "",
    });

    setLength({
      about: 0,
      stack: 0,
      project: 0,
    })
  }


if(props.newform){
  return (
    <FormData
    {...values}
    />
  )
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
        />
      ))}
      {TEXTAREA_DATA.map(({ placeholder, name, innerText }) => (
        <Textarea
          name={name}
          key={name}
          placeholder={placeholder}
          InnerText={innerText}
          value={values[name]}
          length ={length[name]}
          handleChange={handleChange}
          validationAfterBlur={validationAfterBlur}
        />
      ))}

      <div className="btn-section">
        <button className="button" type="submit" onClick={(e) => {

       for(let el in values){
         submitValidation(el, values[el]);
        }
         props.onSubmit(e);
        }}>
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
