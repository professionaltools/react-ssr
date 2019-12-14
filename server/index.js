import React from 'react'
import {StaticRouter, matchPath,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import express from 'express'
import routes from '../src/App.js'
import {getServerStore} from '../src/store/store'
import Header from '../src/components/Header'
const store = getServerStore()
const app = express()
app.use(express.static("public"))
app.get('*', (req, res) => {
    //能够根据路由渲染出组件，并且拿到loadData方法，获取数据
    let promises = []
    routes.some(route => {
        const match = matchPath(req.path, route)
        if (match) {
            const {loadData} = route.component
            if (loadData) {
                promises.push(loadData(store))
            }
        }
    })
    //等待所有网络请求结束再渲染
    Promise.all(promises).then(() => {
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Header/>
                    {routes.map(route=><Route {...route}/>)}
                </StaticRouter>
            </Provider>
        )
        res.send(`
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
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