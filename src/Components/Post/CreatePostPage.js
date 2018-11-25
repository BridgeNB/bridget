import React, { Component } from 'react';
import CreatePostForm from './CreatePostForm';

export class CreatePostPage extends Component {
    createPost = values => {
        const { title, content } = values;
        console.log(title, content);
    }
    render() {
        return (
            <div className="create-post-page">
                 this is a create post page!
                <CreatePostForm onSubmit={this.createPost} />
            </div>
        )
    }
}

export default CreatePostPage;