// Copyright (c) 2018 by monster1935. All Rights Reserved.
// 头部导航栏组件
import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const routeList = [
  { path: '/', label: '首页' },
  { path: '/getstart', label: '新手入门' },
  { path: '/api', label: 'API' },
  { path: '/about', label: '关于' },
  { path: '/login', label: '登录' },
];

const Header = () => (
  <div className="header-wrapper">
    <a className="brand">
      <img
        src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg"
        alt="cnode"
      />
    </a>
    <ul className="nav pull-right">
      {routeList.map(route => {
        return (
          <li key={route.path}>
            <Link to={route.path}>
              {route.label}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Header;
