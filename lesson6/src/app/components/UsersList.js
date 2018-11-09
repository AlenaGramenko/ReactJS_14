import React from 'react';
import axios from 'axios';
import User from "./User";
import BlogHeader from "./BlogHeader";
import { usersText } from '../components/datas';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        users: []
    };
    
    let will_return_array = true;
    let user_id = "";
    
    if(this.props.user_id) {
     user_id = "/" + this.props.user_id;
     will_return_array = false;
    }
    
    let users_url = `https://jsonplaceholder.typicode.com/users${user_id}`;
    axios.get(users_url)
        .then((response) => {
            if (will_return_array) {
              this.setState({users: response.data});
            } else {
            this.setState({users: [response.data]});
            }
        });
  }

  render() {
    if(!this.state.users.length) {
        return null; //Пользователи еще не загрузились
    }

    let users = this.state.users.map((user, index) => {
        return <User key={index} {...user} />;
    });

    return (
    <div>
        <br/>
        <BlogHeader blogHeaderText={usersText}/>
        {users}
    </div>);
  }
}