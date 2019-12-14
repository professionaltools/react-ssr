import React, {useState} from 'react'
import Index from './container/Index'
import About from './container/About'
import Home from './container/Home'

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
    }
]