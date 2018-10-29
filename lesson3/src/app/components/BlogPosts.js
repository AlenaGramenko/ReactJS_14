import React from 'react';
import Paginator from './Paginator';

export default class BlogPosts extends React.Component {
  render() {
    let posts = this.props.posts.map((post, index) => {
        return <div className="blog-post" key={index}>
                 <h2 className="blog-post-title">{post.title}</h2>
                  <p className="blog-post-meta">{post.date} by <a href="`${post.autor.url}`">{post.autor.name}</a></p>
                 <div dangerouslySetInnerHTML={{__html: post.body}} ></div>
               </div>;
        });
    
    return <div className="col-sm-8 blog-main">
             {posts}
             <Paginator pages={this.props.pages}/>
           </div>;
  }
}