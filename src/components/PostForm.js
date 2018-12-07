import React, { Component } from 'react'

class PostForm extends Component {
    state = {
        title: '',
        body: ''
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" />
                    </div>
                    <br />
                    <div>
                        <label>Body:</label> <br />
                        <textarea type="text" name="body" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;