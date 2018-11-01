import React from 'react';
import BlogHeader from './BlogHeader';
import BlogPosts from './BlogPosts';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import menuItems from './menuItems';
import { blogHeaderText, blogPosts, blogPages, about, socialSites, footerItems } from './datas';

export default class MainContent extends React.Component {
    constructor(props){
      super(props);
    }
    
    render() {
      return (
        <div>
          <Header items={menuItems}/>
          <div className="container">
            <BlogHeader blogHeaderText={blogHeaderText}/>
            <div className="row">
              <BlogPosts posts={blogPosts} pages={blogPages}/>
              <SideBar menuItems={menuItems} aboutInfo={about} social={socialSites}/>
            </div>
          </div>
          <Footer items={footerItems}/>
        </div>
      );
    }
    
    componentDidMount() {
      alert("Hi :)");
    }
}