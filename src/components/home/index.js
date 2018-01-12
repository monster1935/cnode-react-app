// Copyright (c) 2018 by monster1935. All Rights Reserved.
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/zh-cn';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postList: [],
    };
  }

  componentWillMount() {
    this.getPostData().then(res => {
      if (res.status === 200) {
        this.setState({
          postList: res.data.data,
        });
      } else {
        console.error(res.statusText);
      }
    }).catch(e => {
      console.warn(e);
    });
  }


  getPostData() {
    return axios.get('https://cnodejs.org/api/v1/topics');
  }

  tabTypes(post) {
    const tab = post.tab;
    const map = {
      'top': '置顶',
      'share': '分享',
      'good': '精华',
      'ask': '问答',
    };
    if (post.top) {
      return map['top'];
    } else if (post.good) {
      return map['good'];
    } else {
      return map[tab];
    }
  }

  render () {
    const contentHtml = () => {
      return this.state.postList.map(post => (
          <div className="cell" key={post.id}>
            <a className="user-avatar pull-left">
              <img
                src={post.author.avatar_url} alt={post.author.loginname}
              />
            </a>
            <span className="reply-count pull-left" >
              <span
                className="count-of-replies"
                title="回复数"
              >
              {post.reply_count}
              </span>
              <span className="count-sperator">/</span>
              <span className="count-of-visits" title="点击数">
                {post.visit_count}
              </span>
            </span>
            <a className="last-time pull-right">
              <img className="user-small-avatar" src={post.author.avatar_url} alt={post.author.loginname}>
              </img>
              <span className="last-active-time">{moment(post.last_reply_at).fromNow()}</span>
            </a>
            <div className="topic-title-wrapper">
              <span
                className={(post.top || post.good) ? 'tag put-top': ' tag tab-common' }
              >
                {this.tabTypes(post)}
              </span>
              <a className="topic-title" title={post.title}>
                {post.title}
              </a>
            </div>
          </div>
        )
      );
    }
    return (
      <div className="panel">
        <div className="header">
          <a href="/" className="topic-tab current-tab">全部</a>
          <a href="/" className="topic-tab">精华</a>
          <a href="/" className="topic-tab">分享</a>
          <a href="/" className="topic-tab">问答</a>
          <a href="/" className="topic-tab">招聘</a>
          <a href="/" className="topic-tab">客户端测试</a>
        </div>
        <div className="inner no-padding">
          <div className="topic-list">
            {contentHtml()}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
