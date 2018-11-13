import {GET_POSTS, DELETE_POST, ADD_POST, EDIT_POST} from '../constants/postsConstants';
import axios from 'axios';

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: axios.get('https://jsonplaceholder.typicode.com/posts')
    }
}

export function deletePost(idPost) {
    return {
        type: DELETE_POST,
        payload: idPost
    };
}

export function addPost(id, title, userId, body) {
    return {
        type: ADD_POST,
        payload: {id, title, userId, body}
    };
}

export function editPost(idPost, title, body) {
    return {
        type: EDIT_POST,
        payload: {idPost, title, body}
    };
}