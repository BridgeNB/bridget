import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../General/Input';

export class CreatePostForm extends Component {
    render() {
        return (
            <form
                className='registration-form'
                onSubmit={this.props.handleSubmit}>
                <label htmlFor="title">Title</label>
                <Field component={Input} type="text" name="title" />
                <label htmlFor="content">Content</label>
                <Field component={Input} type="text" name="content" />
                <button type="submit">Create new post</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'createPost'
})(CreatePostForm);