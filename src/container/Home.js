import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getHomeList} from '../store/home'

function Home(props) {
    useEffect(() => {
        props.getHomeList()
    }, [])
    return <div>
        <h1>home:{props.userInfo.name}</h1>
    </div>
}

Home.loadData = store => {
    return store.dispatch(getHomeList())
}
export default connect(
    state => {
        return {userInfo: state.home.userInfo}
    }, {getHomeList}
)(Home)
