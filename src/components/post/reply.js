// Copyright (c) 2018 by monster1935. All Rights Reserved.
// 文章评论组件

import React, { Component } from 'react';
import moment from 'moment';
import './reply.less';

class Reply extends Component {
  render () {
    return (
      <div className={`reply ${this.props.highlight.includes(this.props.id) ? 'reply-highlight' : ''}`} id={this.props.id}>
        <div className="author-content">
          <a className="user-avatar">
            <img src={this.props.author.avatar_url} alt={this.props.author.loginname} />
          </a>
          <div className="user-info">
            <a className="reply-author">{this.props.author.loginname}</a>
            <a className="reply-time">
              {this.props.index}楼•{moment(this.props.create_at).fromNow()}
            </a>
            <span
              className={`reply-by-author ${this.props.loginname === this.props.author.loginname ? 'display' : ''}`}
            >
              作者
            </span>
          </div>
          <div className={`user-action ${this.props.ups.length ? 'display' : ''}`}>
            <span><i className="iconfont icon-good" title="喜欢"></i></span>
            <span className="up-count">{this.props.ups.length}</span>
          </div>
        </div>
        <div className="reply-content" dangerouslySetInnerHTML={{__html: this.props.content}}>
        </div>
      </div>
    );
  }
};

export default Reply;
