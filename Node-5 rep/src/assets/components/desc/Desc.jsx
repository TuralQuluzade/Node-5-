import React from 'react'
import styles from "./Desc.module.css"
const Desc = ({ item }) => {
  return (
    <div className={styles.card}>   
        <img src={item.image} className={styles.img}alt="" />
        <div className={styles.about}>
            <h1>About This Product</h1>
            <span>{item.description}</span>
            <span>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</span>
            <h2>Price</h2>
            <h5>{item.price}{" $"}</h5>
            <div className={styles.btn}>
                <button className={styles.shop}>WIEV DETAILS</button>
                <button className={styles.club}>ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}

export default Desc