import React from 'react'
import styles from './about.css'
import WithStyle from '../WithStyle'
function About(props) {
  // if (props.staticContext) {
  //   props.staticContext.css.push(styles._getCss())
  // }
    return (
        <div>
            <h2 className={styles.title}>about</h2>
        </div>
    )
}

export default WithStyle(About,styles)
