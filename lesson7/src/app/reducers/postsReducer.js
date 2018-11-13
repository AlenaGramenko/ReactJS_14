import * as PostsConstants from '../constants/postsConstants';
import merge from 'lodash/merge';

export function postsReducer(state = {posts: [], is_loading: false}, action) {
    switch (action.type)
    {
        //Получение постов
        case PostsConstants.GET_POSTS_PENDING: {
            state = {...state, is_loading: true}; //Правильно
            //state.is_loading = true; //Изменяемое состояние, ссылка одна, работать не будет
            break;
        }
        case PostsConstants.GET_POSTS_FULFILLED: {
            state = {...state, is_loading: false, posts: action.payload.data};
            break;
        }
        case PostsConstants.GET_POSTS_REJECTED: {
            state = {...state, is_loading: false, error_message: action.payload.message};
            break;
        }
        //Удаление поста
        case PostsConstants.DELETE_POST: {
            let index = null;
            state.posts.forEach((value, i) => {
               if(parseInt(value.id) === parseInt(action.payload)){
                   index = i;
               }
            });

            if(index !== null){
                state = merge({}, state);
                state.posts.splice(index, 1);
            }
            break;
        }
        //Добавление постов
        case PostsConstants.ADD_POST: {
            //Вариант 1
            // state = {
                // ...state,
                // posts: [...state.posts, action.payload]
            // };
            //Вариант 2
            state = merge({}, state);
            state.posts.push(action.payload);
            break;
        }


        //TODO: Редактирование постов
    }
    return state; //Обязательно новое состояние, а не просто измененный объект
}