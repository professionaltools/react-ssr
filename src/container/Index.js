import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getIndexList} from '../store/index'
import styles from './index.css'
import WithStyle from '../WithStyle'
import {getHomeList} from "../store/home";

function Index(props) {
  const [count, setCount] = useState(1)
  useEffect(() => {
    if (!props.list.length) {
      props.getIndexList()
    }
  }, [])
  return <div>
    <h2>app</h2>
    <p className={styles.title}>{props.title}</p>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>btn</button>
    <ul>
      {
        props.list.map(item => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  </div>
}

Index.loadData = store => {
  return store.dispatch(getIndexList())
}
export default connect(
  state => {
    return {list: state.index.list}
  }, {getIndexList}
)(WithStyle(Index, styles))

// const NewIndex = connect(
//   state => {
//     return {list: state.index.list}
//   }, {getIndexList}
// )(WithStyle(Index, styles))
// NewIndex.loadData = store => {
//   return store.dispatch(getIndexList())
// }
// export default NewIndex
