import React from 'react';
import Paginator from './Paginator';
import AddPostForm from './AddPostForm';
import Post from './Post';
import UsefullFunctions from './UsefullFunctions';
import {months} from './months';
import axios from 'axios';


export default class BlogPosts extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        show_details: false,
        posts: []
    };
    
    let will_return_array = true;
    let post_id = "";
    
    if(props.post_id) {
     post_id = "/" + this.props.post_id;
     will_return_array = false;
    }
    
    let posts_url = `https://jsonplaceholder.typicode.com/posts${post_id}`;
    axios.get(posts_url)
        .then((response) => {
            if (will_return_array) {
              this.setState({posts: response.data});
            } else {
            this.setState({posts: [response.data]});
            }
        });
    
    this.showDetails = this.showDetails.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateAllPosts = this.handleUpdateAllPosts.bind(this);
  }
  
  showDetails() {
    this.setState({
        show_details: !this.state.show_details
      }
    );
  }
  
  handleDelete(id) {
    let newPosts = this.state.posts.filter((post) => post.id !== id)
    this.setState({
      posts: newPosts
    })
  }
  
  handleUpdateAllPosts(post) {
    let updated_posts = this.state.posts.filter((p) => p.id != post.id);
    updated_posts.push(post);

    this.setState({
      posts: updated_posts
    })
  }
    
  render() {
    let posts = this.state.posts.map((post, index) => {
        return (<Post key={index} post={post} idx={index} handleDelete={this.handleDelete} handleUpdateAllPosts={this.handleUpdateAllPosts} show_details={this.props.show_details} full_body={this.props.full_body}/>);
        });
    
    return <div>
             {posts}
             <AddPostForm/>
             <Paginator pages={this.props.pages ? this.props.pages : 1}/>
           </div>
  }
  
  
  componentDidMount() {
    self = this;
    
    $("#add_post_form").on("submit", function(event) {
      event.preventDefault();
      let title = $(event.target).find("#title").val();
      let body = $(event.target).find("#body").val();
      self.addPost(title, body);
      
      $('#title').val('');
      $('#body').val('');
    });
  }
  
  getCurrentDate() {
    let fullDate = new Date();
    let monthName = months[fullDate.getMonth()];
    return monthName + " " + fullDate.getDate() + "," + " " + fullDate.getFullYear();
  }

  addPost(title, body) {
    let max_id = Math.max(...this.state.posts.map(p => p.id));
    
    this.state.posts.push({
      user_id: 1,
      id: max_id + 1,
      title: title,
      body: body
    });
    
    this.setState({
      posts: this.state.posts
    });
  }
}