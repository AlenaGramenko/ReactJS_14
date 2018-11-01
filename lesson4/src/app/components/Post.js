import React from 'react';
import {months} from './months';
import PostBody from './PostBody';

export default class Post extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      show_details: false,
      editing: false
    };
    
    this.showDetails = this.showDetails.bind(this);
    this.editPost = this.editPost.bind(this);
    
    this.input_id = `editing_title${props.post.id}`;
    this.body_id = `editing_body${props.post.id}`;
  }
  
  showDetails() {
    this.setState({
        show_details: !this.state.show_details
      }
    );
  }
  
  getCurrentDate() {
    let fullDate = new Date();
    let monthName = months[fullDate.getMonth()];
    return monthName + " " + fullDate.getDate() + "," + " " + fullDate.getFullYear();
  }
  
  randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  editPost() {
    if(this.state.editing) {
      //Пришлось запоминать значение input'а таким образом
      let t = $("#" + this.input_id).val(); 
      let b = $("#" + this.body_id).val();
      //Видела в интернете такую конструкцию:
      //<input type='text' ref={input => this.name = input}
      //Расскажите, пожалуйста, на уроке как работает ref={input => this.name = input}
      //Это как-то сам input привязываеться к свойству класса?

      let post = {
        id: this.props.post.id,
        title: t,
        autor: {
          name: 'Alena',
          url: "#"
        },
        date: this.getCurrentDate(),
        body: b
      }
      this.props.handleUpdateAllPosts(post);
    }
    
    this.setState({
        editing: !this.state.editing
      }
    );
  }
    
  render() {
    let post_details;
    let post_title;
    let post_date;
    
    let edit_btn = <button onClick={() => this.editPost()} className="btn btn-primary">{this.state.editing ? 'Submit' : 'Edit'}</button>;
    
    let delete_btn = <button onClick={() => this.props.handleDelete(this.props.post.id)}className="btn btn-primary">Delete</button>;
    
    if(this.state.editing) {
      post_title = <input type="text" className="form-control" id={this.input_id} defaultValue={this.props.post.title} />;
      
    post_details = <PostBody edit_mode={true} id={this.body_id} def_value={this.props.post.body} edit_btn={edit_btn} delete_btn={delete_btn}/>;
 
    } else {
      post_title = <h2 className="blog-post-title title_for_hide_details" onClick={this.showDetails}>{this.props.post.title}</h2>;
      
      post_date = <p className="blog-post-meta">{this.props.post.date} by <a href="`${this.props.post.autor.url}`">{this.props.post.autor.name}</a></p>;
      
      if(this.state.show_details === true) {
        post_details = <PostBody edit_mode={false} def_value={`${this.props.post.body}`} edit_btn={edit_btn} delete_btn={delete_btn}/>;
      } else {
        post_details = delete_btn;
      }
    }
    
    return (<div className="blog-post">
              {post_title}
              <br/>
              {post_date}
              {post_details}
           </div>);
  }
}