import React from 'react';

export default class PostBody extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    if(this.props.edit_mode === true) {
      return <div>
         <textarea className="form-control" id={this.props.id} rows="10" defaultValue={this.props.def_value}/>
         <br/>
         {this.props.edit_btn}&nbsp;
         {this.props.delete_btn}
       </div>
    } else {

      return <div>
          <div dangerouslySetInnerHTML={{__html: this.props.def_value}} ></div>
          <br/>
          {this.props.edit_btn}&nbsp;
          {this.props.delete_btn}
        </div>;
    }
  }
}