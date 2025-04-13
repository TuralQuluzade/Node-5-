import React from 'react'
import styles from "./Sayac.module.css"

const Sayac = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <p>Special Promo</p>
            <h1>Summer Sale</h1>
            <span>Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</span>
            <div className={styles.sayac}>
            <div className={styles.week}>
                <h1>00</h1>
                <p>weeks</p>
            </div>
            <div className={styles.week}>
                <h1>00</h1>
                <p>days</p>
            </div>
            <div className={styles.week}>
                <h1>00</h1>
                <p>hr</p>
            </div>
            <div className={styles.week}>
                <h1>00</h1>
                <p>min</p>
            </div>
            <div className={styles.week}>
                <h1>00</h1>
                <p>sec</p>
            </div>
            </div>
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Sayac