/**
 * Created by rudongdong on 2019-12-13.
 */
let express = require('express')
const app = express()
app.get('/course/list', (req, res) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST')
    res.header('Content-Type','application/json;charset=utf-8')
    res.json({
        code: 0,
        list: [
            {
                name: 'react',
                id: 1,
            },
            {
                name: 'vue',
                id: 2,
            }
        ]
    })
})
app.listen(9090,()=>{
    console.log('mock')
})