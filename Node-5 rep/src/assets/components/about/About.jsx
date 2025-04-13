import React from 'react'
import styles from "./About.module.css"
const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
        <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
            <div className={styles.about}>
                <h4>Merchant Company</h4>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
                <button>LEARN MORE</button>
            </div>
        </div>
        
    </div>
  )
}

export default About