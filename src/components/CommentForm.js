import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class UserForm extends  Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: ''
    };

    handleUserChange = ev => {
        this.setState({
            user: ev.target.value
        });
    };

    handleTextChange = ev => {
        this.setState({
            text: ev.target.value
        });
    };

    render() {
        return (
            <div>
                Name: <input type= 'text' value={this.state.user} onChange={this.handleUserChange} />
                Text: <textarea value={this.state.text} onChange={this.handleTextChange} />
            </div>
        );
    }
}

export default UserForm;

