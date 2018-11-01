import React from 'react';
import Paginator from './Paginator';
import AddPostForm from './AddPostForm';
import Post from './Post';
import UsefullFunctions from './UsefullFunctions';
import {months} from './months';


export default class BlogPosts extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        show_details: false,
        posts: this.props.posts
    };
    
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
    //Вопрос: здесь выводиться варнинг почему-то Warning: Each child in an array or iterator should //have a unique "key" prop. Check the render method of `BlogPosts`.
    // хотя я инициализирую key в Post. Если изменить имя параметра idx на key(чтобы реакт //понял что я передаю key) - тогда пишет что 
    //Warning: Post: `key` is not a prop. Trying to access it will result in `undefined` being //returned. If you need to access the same value within the child component, you should //pass it as a different prop.
    //P.S. хм... добавила в <Post key={index} - работает без варнингов...
    
    let posts = this.state.posts.map((post, index) => {
        return (<Post key={index} post={post} idx={index} handleDelete={this.handleDelete} handleUpdateAllPosts={this.handleUpdateAllPosts}/>);
        });
    
    return <div className="col-sm-8 blog-main">
             {posts}
             <AddPostForm/>
             <Paginator pages={this.props.pages}/>
           </div>;
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
      id: max_id + 1,
      title: title,
      autor: {
        name: 'Alena',
        url: "#"
      },
      //Не получается подключить класс UsefullFunctions с getCurrentDate функцией (я хотеля ее //использовать в нескольких модулях - (в Post.js), но приходится дублировать код)
      //Uncaught TypeError: _UsefullFunctions2.default.getCurrentDate is not a function
      //не пойму что не так
      //date: UsefullFunctions.getCurrentDate(),
      
      date: this.getCurrentDate(),
      body: body
    });
    
    this.setState({
      posts: this.state.posts
    });
  }
}