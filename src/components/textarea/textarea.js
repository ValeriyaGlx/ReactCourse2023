import React from 'react';

export default class Textareas extends React.Component {
    render() {
      return (
        <div className="form-section">
          <label className="textarea-label" for={this.props.name}>
            {this.props.innerText}
          </label>
          <textarea
            className="textarea"
            placeholder={this.props.placeholder}
            id={this.props.name}
            rows="7"
          ></textarea>
        </div>
      );
    }
  }