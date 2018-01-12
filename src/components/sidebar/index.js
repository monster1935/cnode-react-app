// Copyright (c) 2018 by monster1935. All Rights Reserved.
import React from 'react';

const Sidebar = () => (
  <div>
    <div className="panel">
      <div className="inner">
        <p>CNode: Node.js专业中文社区</p>
        <div>
          您可以<a href="/">登录</a>或<a href="/">注册</a>也可以
          <a href="/">
            <span className="span-info">通过 Github 登录</span>
          </a>
        </div>
      </div>
    </div>
    <div className="panel">
      <div className="header">
        <span className="col-fade">无人回复的话题</span>
      </div>
      <div className="inner">
        content
      </div>
    </div>
    <div className="panel">
      <div className="header">
        <span className="col-fade">积分榜 Top 100 >></span>
      </div>
      <div className="inner">
        content
      </div>
    </div>

    <div className="panel">
      <div className="header">
        <span className="col-fade">友情社区</span>
      </div>
      <div className="inner">
        <ol className="friendship-community">
          <li>
            <a href="https://ruby-china.org/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png" />
            </a>
          </li>
          <div className="sep10"></div>
          <li>
            <a href="http://golangtc.com/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png"/>
            </a>
          </li>
          <div className="sep10"></div>
          <li>
            <a href="http://phphub.org/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png"/>
            </a>
          </li>
          <div className="sep10"></div>
          <li>
            <a href="https://testerhome.com/" target="_blank">
              <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div className="panel">
      <div className="header">
        <span className="col-fade">客户端二维码</span>
      </div>
      <div className="inner cnode-app-download">
        <img width="200" src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU" />
        <br/>
        <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
      </div>
    </div>
  </div>
);

export default Sidebar;
