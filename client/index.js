import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from '../src/App'
import {getClientStore} from '../src/store/store'
import Header from '../src/components/Header'
/*
* 因为server端已经将app里面的代码渲染出来了，所以这个时候就不能使用render方法了，render方法既做dom的初始化，又做事件的监听
* 这里我们需要做的是注入的方式
* */
const Page = (
  <Provider store={getClientStore()}>
    <Router>
      <Header/>
      <Switch>
        {routes.map((route,index) => <Route key={index} {...route}/>)}
      </Switch>
    </Router>
  </Provider>)

if (window.__context) {
  ReactDOM.hydrate(
    Page,
    document.getElementById('root')
  )
} else {
  ReactDOM.render(
    Page,
    document.getElementById('root')
  )
}