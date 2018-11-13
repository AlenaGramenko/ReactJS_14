import React from 'react';

export default class Paginator extends React.Component {
    render() {
      let items = [];
      for(let i = 0; i < this.props.pages.pages_count; i++) {
        items.push(<li key={i}><a href="#">{i + 1}</a></li>);
      }
      
      return(<nav>
                <ul className="pager">
                  <li><a href="#">Previous</a></li>
                  {items}
                  <li><a href="#">Next</a></li>
                </ul>
              </nav>);
    }
}

