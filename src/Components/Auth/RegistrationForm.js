import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../General/Input';

export class RegistrationForm extends Component {
    render() {
        return (
            <form
                className='registration-form'
                onSubmit={this.props.handleSubmit}>
                <label htmlFor="name">Name</label>
                <Field component={Input} type="text" name="name" />
                <label htmlFor="email">Email</label>
                <Field component={Input} type="email" name="email" />
                <label htmlFor="username">Username</label>
                <Field component={Input} type="text" name="username" />
                <label htmlFor="password">Password</label>
                <Field component={Input} type="password" name="password" />
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration'
})(RegistrationForm);