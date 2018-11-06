import React from 'react';
import {Link} from 'react-router';

export default class Menu extends React.Component {
    isActive(href) {
        return window.location.pathname === href;
    }
    
    render() {
        let items = this.props.items.map((item, index) => {
          let itemClass = `blog-nav-item ${this.isActive(item.href) ? 'active' : ''}`;
          return <Link to={item.href} className={itemClass} key={index}>{item.title}</Link>;
      });

      return  <nav className="blog-nav">
                {items}
              </nav>;
    }
}