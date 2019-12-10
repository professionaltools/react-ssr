import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import App from '../src/App.js'

const app = express()
app.use(express.static("public"))
app.get('/', (req, res) => {
    // const Page = <App title="dno"></App>
    //吧react组件，解析成html
    const content = renderToString(App)
    res.send(`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
        <meta http-equiv=X-UA-Compatible content="ie=edge">
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