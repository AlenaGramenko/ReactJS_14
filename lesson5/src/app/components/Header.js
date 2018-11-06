import React from 'react';
import Menu from './Menu';
import LoginBlock from './LoginBlock';

export default class Header extends React.Component {
    render() {
      return (<div className="blog-masthead">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <Menu items={this.props.items}/>
            </div>
            <div className="col-sm-3 col-sm-offset-1 blog-login">
              <LoginBlock/>
            </div>
          </div>
        </div>
      </div>);
    }
}