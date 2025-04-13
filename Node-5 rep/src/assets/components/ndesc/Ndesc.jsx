import React from 'react'
import styles from "./Ndesc.module.css"
const Ndesc = ({ item }) => {
  return (
    <div className={styles.card}>   
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
            <img src={item.image} className={styles.img}alt="" />
        </div>
  )
}

export default Ndesc