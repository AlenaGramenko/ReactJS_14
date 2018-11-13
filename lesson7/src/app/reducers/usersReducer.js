import * as UsersConstants from '../constants/usersConstants';
import merge from 'lodash/merge';

export function usersReducer(state = {users: [], is_loading: false}, action) {
    switch (action.type) {
      case PostsConstants.GET_POSTS_PENDING: {
        state = {...state, is_loading: true};
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
    }
    return state;
}