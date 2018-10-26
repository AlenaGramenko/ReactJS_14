import React from 'react';
import ReactDOM from 'react-dom';

class UserInfo extends React.Component {
  
  constructor(props) {
    super(props);
    this.name = this.props.uname;
  }

  formatted_date = () => {
    var result = "";
    var d = new Date();
    result += d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    return result;
  }
  
  render() {
    return <h1 onClick={()=>{alert(this.formatted_date());}}>{this.props.uname}</h1>;
  }
}


export default UserInfo