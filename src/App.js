import React, {useState} from 'react'
import Index from './container/Index'
import About from './container/About'
import Home from './container/Home'
import NotFound from './container/NotFound'
import './app.css'
/*
* 因为node层是没有document.createElement('style');的
* 需要安装isomorphic-style-loader；吧server的webpack里面的style-loader替换成这个loader
* */
//改造成js配置
export default [
  {
    path: '/',
    component: Index,
    exact: true,
    key: 'index'
  },
  {
    path: '/about',
    component: About,
    exact: true,
    key: 'about'
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    key: 'home'
  },
  {
    component:NotFound
  }
]