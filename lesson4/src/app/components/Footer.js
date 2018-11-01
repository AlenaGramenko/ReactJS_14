import React from 'react';

export default class Menu extends React.Component {
    render() {
      return <footer class="blog-footer">
                <p>Blog template built for <a href={this.props.items[0].href}>{this.props.items[0].title}</a> by <a href={this.props.items[1].href}>{this.props.items[1].title}</a>
                </p>
                <p>
                  <a href="#">Back to top</a>
                </p>
              </footer>;
    }
}

