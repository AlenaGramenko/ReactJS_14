import React from 'react';
import UsersList from '../components/UsersList';

export default class User extends React.Component {
  render() {
   return (<UsersList user_id={this.props.params.id}/>);
  }
}