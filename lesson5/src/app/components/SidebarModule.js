import React from 'react';
import {Link} from 'react-router';

export default class SidebarModule extends React.Component {
    render() {
      if(this.props.inset === true) {
        return <div className="sidebar-module sidebar-module-inset">
                 <h4>{this.props.title}</h4>
                 {this.props.m_body}
               </div>
      } else {
        let items = this.props.m_body.map((item, index) => {
            return <li key={index} >
                     <Link to={item.href}>{item.title}</Link>
                   </li>;
        });
        return  <div className="sidebar-module">
                  <h4>{this.props.title}</h4>
                  <ol className="list-unstyled">
                    {items}
                  </ol>
                </div>
      }
    }
}


        
