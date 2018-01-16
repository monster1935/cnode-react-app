// Copyright (c) 2018 by monster1935. All Rights Reserved.
// 新手入门组件
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stringHtml from './markdown.js';

class Guides extends Component {

  render() {
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
          <div className="topic-content" dangerouslySetInnerHTML={{__html: stringHtml}}>
          </div>
        </div>
      </div>
    );
  }
};

export default Guides;
