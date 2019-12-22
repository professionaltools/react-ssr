import path from 'path'
import fs from 'fs'
import React from 'react'
import {StaticRouter, matchPath, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import express from 'express'
import routes from '../src/App.js'
import {getServerStore} from '../src/store/store'
import Header from '../src/components/Header'

const proxy = require("http-proxy-middleware")
const store = getServerStore()
const app = express()
app.use(express.static("public"))

//客户端来的请求 进行转发
app.use(
  "/api",
  proxy({
    target: 'http://localhost:9090',
    changeOrigin: true
  })
)

function csrRender(res) {
  //读取csr文件 返回
  const filename = path.resolve(process.cwd(), 'public/index.csr.html')
  const html = fs.readFileSync(filename, 'utf-8')
  return res.send(html)
}

app.get('*', (req, res) => {
  if (req.query._mode === 'csr') {
    console.log('url参数开启降级')
    return csrRender(res)
  }


  //能够根据路由渲染出组件，并且拿到loadData方法，获取数据
  let promises = []
  routes.some(route => {
    const match = matchPath(req.path, route)
    if (match) {
      const {loadData} = route.component
      if (loadData) {
        const promise = new Promise((resolve, reject) => {
          loadData(store).then(resolve).catch(resolve)
        })
        promises.push(promise)
      }
    }
  })
  //等待所有网络请求结束再渲染
  Promise.all(promises).then(() => {
    const context = {
      css: []
    }
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Header/>
          <Switch>
            {routes.map((route, index) => <Route key={index} {...route}/>)}
          </Switch>
        </StaticRouter>
      </Provider>
    )
    console.log("context", context)
    if (context.statuscode) {
      //    转台的切换和页面的跳转
      res.status(context.statuscode)
    }
  const css = context.css.join('\n')
    res.send(`
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <style>
    ${css}
    </style>
    <body>
    <div id="root">${content}</div>
    <script>
    window.__context = ${JSON.stringify(store.getState())}
</script>
    <script src="/bundle.js"></script>
    </body>
    </html>
    
    `)
  })
})
app.listen(9003, () => {
  console.log('ok')
})