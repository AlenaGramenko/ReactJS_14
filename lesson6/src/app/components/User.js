import React from 'react';
import {Link} from 'react-router';

export default class User extends React.Component {
    render() {
      let user_url = "users/" + this.props.id;
      return (<div className="panel panel-default">
          <div className="panel-heading">
            <Link to={user_url} ><h3>{this.props.username}</h3></Link>
          </div>
          <div className="panel-body">
            <address>
              <strong>{this.props.name}</strong><br/>
              {this.props.email}<br/>
              {this.props.website}<br/>
              <abbr title="Phone">P:</abbr>{this.props.phone}
            </address>
          </div>
      </div>);
    }
}