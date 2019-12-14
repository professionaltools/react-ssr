import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getIndexList} from '../store/index'

function Index(props) {
    const [count, setCount] = useState(1)
    useEffect(() => {
        console.log(props)
        if (!props.list.lang) {
            props.getIndexList()
        }
    }, [])
    return <div>
        <h2>app</h2>
        <p>{props.title}</p>
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
        console.log(state.index.list)
        return {list: state.index.list}
    }, {getIndexList}
)(Index)
