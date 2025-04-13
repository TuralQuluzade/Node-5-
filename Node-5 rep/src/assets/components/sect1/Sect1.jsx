import React from 'react'
import styles from "./Sect1.module.css"
const Sect1 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <h1>Shop With Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
            <div className={styles.btn}>
                <button  className={styles.shop}>SHOP NOW</button>
                <button  className={styles.club}>CLUB MEMBERSHIP</button>
            </div>
        </div>
    </div>
  )
}

export default Sect1