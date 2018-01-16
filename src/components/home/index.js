// Copyright (c) 2018 by monster1935. All Rights Reserved.
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Link } from 'react-router-dom';
import './index.less';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      tagType: '',
    };
  }

  componentWillMount() {
    const type = this.props.match.params.type;
    this.setState({
      tagType: type || 'all',
    });
    this.getPostData(type).then(res => {
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

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    const type = nextProps.match.params.type;
    this.setState({
      tagType: type || 'all',
    });
    if (this.state.tagType !== type) {
      this.getPostData(type).then(res => {
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
  }

  getPostData(type) {
    return axios.get('https://cnodejs.org/api/v1/topics',{
      params: {
        tab: type,
      }
    });
  }

  tabTypes(post) {
    const tab = post.tab;
    const map = {
      'top': '置顶',
      'share': '分享',
      'good': '精华',
      'ask': '问答',
      'job': '招聘',
    };
    if (post.top) {
      return map['top'];
    } else if (post.good) {
      return map['good'];
    } else {
      return map[tab];
    }
  }

  getRouteList() {
    const routeList = [
      { type: 'all', path: '/', text: '全部' },
      { type: 'good', path: '/tag/good', text: '精华' },
      { type: 'share', path: '/tag/share', text: '分享' },
      { type: 'ask', path: '/tag/ask', text: '问答' },
      { type: 'job', path: '/tag/job', text: '招聘' },
      { type: 'test', path: '/tag/test', text: '客户端测试' },
    ];
    return routeList.map((route) => (
      <Link
        to={route.path}
        key={route.path}
        className={this.state.tagType === route.type ? 'topic-tab current-tab' : 'topic-tab'}
      >
        {route.text}
      </Link>
    ));
  }

  render () {
    const contentHtml = () => {
      return this.state.postList.map((post,index) => (
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
              <Link
                className="topic-title"
                to={'/topic/'+post.id}
              >
                {post.title}
              </Link>
            </div>
          </div>
        )
      );
    }
    const infoHtml = () => (
      <div className="info-nodata">
        <h3>暂无数据</h3>
      </div>
    );
    return (
      <div className="panel">
        <div className="header">
          {this.getRouteList()}
        </div>
        <div className="inner no-padding">
          <div className="topic-list">
            {this.state.postList.length ? contentHtml() : infoHtml()}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
