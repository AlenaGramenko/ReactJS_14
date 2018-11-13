import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import MainContent from './app/pages/MainContent';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Post from './app/pages/Post';

const app = document.getElementById('app');
ReactDOM.render(
    //Вопрос: тут только так можно сделать роут с параметрами? Через userS/:id нельзя?
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainContent} />
            <Route path="users" component={Users}>
              <Route path=":id" component={User} />
            </Route>
            <Route path="post/:id" component={Post} />
        </Route>
    </Router>,
app);

