import React from 'react';
import BlogPosts from '../components/BlogPosts';

export default class Post extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (<div>
      <div className="blog-header"></div>
      <BlogPosts post_id={this.props.params.id} show_details={true} full_body={true}/>
    </div>);
  }
}