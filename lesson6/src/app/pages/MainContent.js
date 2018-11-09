import React from 'react';
import BlogHeader from '../components/BlogHeader';
import BlogPosts from '../components/BlogPosts';
import { blogHeaderText, blogPages} from '../components/datas';

export default class MainContent extends React.Component {
    constructor(props){
      super(props);
    }
    
    render() {
      return (
        <div>
          <BlogHeader blogHeaderText={blogHeaderText}/>
          <BlogPosts pages={blogPages} show_details={false} full_body={false}/>
        </div>
      );
    }
}