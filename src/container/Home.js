import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getHomeList} from '../store/home'
import styles from './home.css'
import WithStyle from '../WithStyle'

function Home(props) {
  useEffect(() => {
    props.getHomeList()
  }, [])
  return <div>
    <h1>home:{props.userInfo.name}</h1>
    <p className={styles.title}>home</p>
  </div>
}

const NewHome = connect(
  state => {
    return {userInfo: state.home.userInfo}
  }, {getHomeList}
)(WithStyle(Home,styles))
NewHome.loadData = store => {
  return store.dispatch(getHomeList())
}
export default NewHome
