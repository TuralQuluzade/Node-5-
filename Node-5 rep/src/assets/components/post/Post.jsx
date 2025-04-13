import React from 'react'
import styles from "./Post.module.css"

const Post = ({item}) => {
    {item.description.slice(0,50)}
  return (
    <div className={styles.cards}> 
            <div className={styles.card}>
                <img src={item.image} alt="" />
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.desc}>{item.description.slice(0,200)}</p>
                <a href="">Continue Reading...</a>
            </div>
    </div>
  )
}

export default Post