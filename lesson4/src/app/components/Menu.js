import React from 'react';

export default class Menu extends React.Component {
    render() {
        let items = this.props.items.map((item, index) => {
        let itemClass = `blog-nav-item ${item.is_active ? 'active' : ''}`;
        return <a key={index} href={item.href} className={itemClass}>
                 {item.title}
               </a>;
      });
      
      return  <nav className="blog-nav">
                {items}
              </nav>;
    }
}