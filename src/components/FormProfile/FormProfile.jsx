import React from "react";
import "./FormProfile.css";

export default class FormProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, surname, date, phone, link, about, stack, project} = this.props;
    return (
      <form className="form">
        <h1 className="form-inner">
          Profile: {name} {surname}
        </h1>
        <div className="form-main">
          <div className="form-section">
            Name: <span className="form-section_span">{name}</span>
          </div>
          <div className="form-section">
            Surname:
            <span className="form-section_span">{surname}</span>
          </div>
          <div className="form-section">
            Birth Date:
            <span className="form-section_span">{date}</span>
          </div>
          <div className="form-section">
            Phone Number:
            <span className="form-section_span">{phone}</span>
          </div>
          <div className="form-section">
            Website:
            <span className="form-section_span">{link}</span>
          </div>
          <div className="form-section">
            About Yourself:
            <span className="form-section_span">{about}</span>
          </div>
          <div className="form-section">
            Technology Stack:
            <span className="form-section_span">{stack}</span>
          </div>
          <div className="form-section">
            Last Project:
            <span className="form-section_span">{project}</span>
          </div>
        </div>
      </form>
    );
  }
}
