import React from 'react';

export default class BlogHeader extends React.Component {
  render() {
    return <div className="blog-header">
      <h1 className="blog-title">{this.props.blogHeaderText.title}</h1>
      <p className="lead blog-description">{this.props.blogHeaderText.description}</p>
    </div> ;
  }
}


