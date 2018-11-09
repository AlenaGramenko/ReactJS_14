import React from 'react';

export default class AddPostForm extends React.Component {
  render() {
    return (<div>
        <form action="#" id="add_post_form">
            <div className="form-group">
                <label htmlFor="title">Post title</label>
                <input type="text" className="form-control" id="title"/>
            </div>
            <div className="form-group">
                <label htmlFor="body">Post text</label>
                <textarea className="form-control" id="body" rows="10" />
            </div>

            <button type="submit" className="btn btn-primary">Create post</button>
        </form>
    </div>);
  }
}

