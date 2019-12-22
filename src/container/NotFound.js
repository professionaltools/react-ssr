import React from 'react'
import {Route} from 'react-router-dom'

function Status({code, children}) {
  return <Route render={({staticContext}) => {
    if (staticContext) {
      staticContext.statuscode = code
    }
    return children
  }}/>
}

const NotFound = props => {
  //渲染这个组件，给staticContext赋值 statuscode=404
  console.log('props',props)
  return (
    <Status code={404}>
      <h2>404</h2>
    </Status>
  )
}
export default NotFound