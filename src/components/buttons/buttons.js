import React from 'react';

export default class Buttons extends React.Component {
    render() {
        return (
            <button className="button">{this.props.text}</button>
        )
    }
}