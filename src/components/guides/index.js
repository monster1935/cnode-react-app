// Copyright (c) 2018 by monster1935. All Rights Reserved.
// 新手入门组件
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import '../post/post.less';

class Guides extends Component {

  render() {
    const lessons = [
      {
        title: 'Node.js 入门',
        items: [
          {
            title: '《快速搭建 Node.js 开发环境以及加速 npm》',
            link: 'http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html',
          },
          {
            title: '《Node.js 包教不包会》',
            link: 'https://github.com/alsotang/node-lessons',
          },
          {
            title: '《ECMAScript 6入门》',
            link: 'http://es6.ruanyifeng.com/',
          },
          {
            title: '《七天学会NodeJS》',
            link: 'https://github.com/nqdeng/7-days-nodejs',
          },
        ]
      },
      {
        title: 'Node.js 资源',
        items: [
          {
            title: '《前端资源教程》',
            link: 'https://cnodejs.org/topic/56ef3edd532839c33a99d00e',
          },
          {
            title: '《国内的 npm 镜像源》',
            link: 'http://cnpmjs.org/',
          },
          {
            title: '《node weekly》',
            link: 'http://nodeweekly.com/issues',
          },
          {
            title: '《node123-node.js中文资料导航》',
            link: 'https://github.com/youyudehexie/node123',
          },
          {
            title: '《A curated list of delightful Node.js packages and resources》',
            link: 'https://github.com/sindresorhus/awesome-nodejs',
          },
          {
            title: '《Node.js Books》',
            link: 'https://github.com/pana/node-books',
          },
        ]
      },
      {
        title: 'Node.js 名人',
        items: [
          {
            title: '《名人堂》',
            link: 'https://github.com/cnodejs/nodeclub/wiki/名人堂',
          }
        ]
      },
    ];
    const content = lessons.map(el => {
        const items = el.items.map(item => {
          return (
            <div key={item.title}>
              <p>{item.title}</p>
              <p><a href={item.link}>{item.link}</a></p>
            </div>
          )
        });
        return (
          <div key={el.title}>
            <h2>{el.title}</h2>
            <div>{items}</div>
          </div>
        )
    });
    return (
      <div className="panel">
        <div className="header">
          <ul className="breadcrumb">
            <li>
              <Link to="/">主页</Link>
              <span className="divider">/</span>
            </li>
            <li className="active">Node.js 新手入门</li>
          </ul>

        </div>
        <div className="inner topic">
          <div className="topic-content">
            <div className="markdown-text">
              {content}
              <div>
                <h2>Node.js 服务器</h2>
                <div>
                  新手搭建 Node.js 服务器，推荐使用无需备案的
                  <a
                    href="https://www.digitalocean.com/"
                  >
                    DigitalOcean(https://www.digitalocean.com/)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Guides;
