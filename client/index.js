import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import App from '../src/App'
import store from '../src/store/store'
/*
* 因为server端已经将app里面的代码渲染出来了，所以这个时候就不能使用render方法了，render方法既做dom的初始化，又做事件的监听
* 这里我们需要做的是注入的方式
* */
const Page = (
    <Provider store={store}>
        <Router>
            {App}
        </Router>
    </Provider>)
ReactDOM.hydrate(
    Page,
    document.getElementById('root')
)