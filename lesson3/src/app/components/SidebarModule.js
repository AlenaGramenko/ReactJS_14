import React from 'react';

export default class SidebarModule extends React.Component {
    render() {
      if(this.props.inset === true) {
        return <div class="sidebar-module sidebar-module-inset">
                 <h4>{this.props.title}</h4>
                 {this.props.m_body}
               </div>
      } else {
        let items = this.props.m_body.map((item, index) => {
            return <li key={index} >
                     <a href={item.href}>
                       {item.title}
                     </a>
                   </li>;
        });
        return  <div class="sidebar-module">
                  <h4>{this.props.title}</h4>
                  <ol class="list-unstyled">
                    {items}
                  </ol>
                </div>
      }
    }
}


        
