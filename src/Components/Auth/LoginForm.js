import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../General/Input';

export class LoginForm extends Component {
    render() {
        return (
            <form className="login-form"
                onSubmit={this.props.handleSubmit}>
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                />
                <button tyep="submit">Log In</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login'
})(LoginForm);
