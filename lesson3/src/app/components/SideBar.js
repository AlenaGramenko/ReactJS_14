import React from 'react';
import SidebarModule from './SidebarModule';

export default class SideBar extends React.Component {
    render() {
      return <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
                <SidebarModule m_body={<p dangerouslySetInnerHTML={{__html: this.props.aboutInfo.about_text}}></p>} title={this.props.aboutInfo.title} inset={true}/>
                <SidebarModule m_body={this.props.menuItems} title={"Menu"} inset={false}/>
                <SidebarModule m_body={this.props.social} title={"Elsewhere"} inset={false}/>
              </div>;
    }
}



        
