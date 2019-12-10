import React,{useState} from 'react'

function App(props) {
  const [count,setCount]=useState(1)
  return <div>
    <h2>app</h2>
    <p>{props.title}</p>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>btn</button>
  </div>
}

export default <App title="摔跤吧"></App>
