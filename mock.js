/**
 * Created by rudongdong on 2019-12-13.
 */
let express = require('express')
const app = express()
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With")
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next()
// })
app.get('/api/course/list', (req, res) => {
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
app.get('/api/home/list', (req, res) => {
    res.json({
        code: 0,
        data: {
            name:'dno'
        }
    })
})
app.listen(9090,()=>{
    console.log('mock')
})