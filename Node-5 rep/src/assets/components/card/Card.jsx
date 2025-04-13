import React from 'react'
import styles from "./Card.module.css"
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";


const Card = ({  item }) => {
  return (
    <div className={styles.card}>
        <img src={item.image} className={styles.img} />
        <span className={styles.name}>{item.title}</span>
        <div className={styles.rate}>
            <div className={styles.sec1}>
            <FaStar style={{color:"#F89D13"}}/>
            <span>{item.rating.rate}</span>
            
            </div>
            <div className={styles.sec2}>
            <CiHeart className={styles.ur}/>
            <span>{item.rating.count}</span>

            </div>
        </div>
        <span className={styles.price}>{item.price}{"  $"}</span>
        <div className={styles.btn}>
        <button className={styles.cad}>Card</button>
        <button className={styles.wei}>Wiew</button>
        </div>
    </div>
  )
}

export default Card