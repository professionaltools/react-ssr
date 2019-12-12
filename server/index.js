import React from 'react'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import express from 'express'
import App from '../src/App.js'
import store from '../src/store/store'

const app = express()
app.use(express.static("public"))
app.get('*', (req, res) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                {App}
            </StaticRouter>
        </Provider>
    )
    console.log(content)
    res.send(`
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
    <div id="root">${content}</div>
    <script src="/bundle.js"></script>
    </body>
    </html>
    
    `)
})
app.listen(9003, () => {
    console.log('ok')
})