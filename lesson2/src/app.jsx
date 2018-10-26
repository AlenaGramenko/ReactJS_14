import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './app/components/user_name'
import User from './app/components/user'

const user_output = document.getElementById('user_name_output');

let userPromise = new Promise(((resolve, reject) => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users/",
    type: 'get',
    contentType: 'application/json; charset=utf-8',
    data: {'id': 1},
    dataType: 'json',
    success: resolve,
    error: reject
  });

}));

userPromise.then((returnedData) => {
  for (let i = 0; i < 10; i++) {
      let user_n = returnedData[0].name;
      let user = new User(user_n);
      ReactDOM.render(<UserInfo uname = {user.getName()} />, user_output);
    }
  }, (error) => {
    console.log('reject()', error);
  }
);


