import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import menuItems from '../components/menuItems';
import {about, socialSites, footerItems } from '../components/datas';

export default class Layout extends React.Component {
    constructor(props){
      super(props);
    }
    
    render() {
      return (
        <div>
          <Header items={menuItems}/>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 blog-main">
                {this.props.children}
              </div>
              <SideBar menuItems={menuItems} aboutInfo={about} social={socialSites}/>
            </div>
          </div>
          <Footer items={footerItems}/>
        </div>
      );
    }
}