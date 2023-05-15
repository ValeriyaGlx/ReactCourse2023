import React from 'react';

export default class Input extends React.Component {
    render() {
      return (
        <div className="form-section">
          <label htmlFor={this.props.name}>{this.props.innerText}</label>
          <input
            placeholder={this.props.placeholder}
            id={this.props.name}
            type={this.props.type}
          ></input>
        </div>
      );
    }
  }