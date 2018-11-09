import React from 'react';
import {Link} from 'react-router';

export default class PostBody extends React.Component {
  constructor(props){
    super(props);
    
    let post_link = <div>
      <span>{props.def_value.substring(0, 30)}</span>
      <Link to={`post/${props.p_id}`}> read more...</Link>
    </div>;
    
    this.state = {
      b_text: props.is_prev ? post_link : props.def_value
    };
  }
  
  render() {
    if(this.props.edit_mode === true) {
      return <div>
         <textarea className="form-control" id={this.props.id} rows="10" defaultValue={this.state.b_text}/>
         <br/>
         {this.props.edit_btn}&nbsp;
         {this.props.delete_btn}
       </div>
    } else {

      return <div>
          <div>
          {this.state.b_text}
          </div>
          <br/>
          {this.props.edit_btn}&nbsp;
          {this.props.delete_btn}
        </div>;
    }
  }
}