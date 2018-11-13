import React from 'react';
import {Link} from 'react-router';

export default class PostItem extends React.Component
{
    render()
    {
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3>
                    <Link to={`/users/${this.props.userId}`}>
                        Автор поста
                    </Link> &nbsp;
                    {this.props.title}
                </h3>
            </div>
            <div className="panel-body">
                <div>{this.props.body}</div>
                <div>
                    <a href="#" className="post_del" data-id={this.props.id}>Удалить пост</a>
                </div>
            </div>
        </div>);
    }
}