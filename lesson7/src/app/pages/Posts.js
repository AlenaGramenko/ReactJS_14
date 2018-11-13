import React from 'react';
import {getPosts, deletePost, addPost} from '../actions/postsAction';
import {connect} from 'react-redux';
import PostsList from "../components/post/PostsList";
import AddPostForm from "../components/post/AddPost";

import $ from 'jquery';

class Posts extends React.Component
{
    render()
    {
        //console.log(this.props);
        if(this.props.is_loading){
            return <div>Данные загружаются...</div>;
        }

        return (
            <div>
                <AddPostForm />
                <PostsList posts={this.props.posts}/>
            </div>
        );
    }
    
    randomIndex(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    componentDidMount()
    {
        this.props.dispatch(getPosts());

        //Удаление
        $('body').on('click', 'a.post_del', (event) => {
            event.preventDefault();
            let idPost = $(event.currentTarget).attr('data-id');
            this.props.dispatch(deletePost(idPost));
        });
        //адрес становиться http://localhost:3000/posts?# и возникает ошибка
        //Cannot GET /posts?
        //$('#add_post_form').on('submit', function (event) {
        $('body').on('click', '#create_post_btn', (event) => {
            event.preventDefault(); //Отмена отправки формы
            let title = $('#title').val();
            let body = $('#body').val();
            let userId = 10; //hard code не знаю как тут правильно определить //айди юзера
            let id = this.randomIndex(20, 100);
            
            this.props.dispatch(addPost(id, title, userId, body));
            
            $('#title').val('');
            $('#body').val('');
        });

        //TODO: обработка формы для редактирования постов
    }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading,
    };
}

export default connect(mapStateToProps)(Posts);