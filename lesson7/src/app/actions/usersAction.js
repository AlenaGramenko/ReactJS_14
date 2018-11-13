import {GET_USERS} from '../constants/usersConstants';
import axios from 'axios';

export function getUsers() {
  return {
    type: GET_USERS,
    payload: axios.get('https://jsonplaceholder.typicode.com/users')
  }
}

// export function getUsersIdx() {
  // let users = payload: axios.get('https://jsonplaceholder.typicode.com/users');
  // let users_idx = users.map((user) => { return user.id; });
  // return {
    // type: GET_USERS,
    // payload: users_idx
  // }
// }