import React from 'react'
import styles from "./Footer.module.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.about}>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
            </div>
            <div className={styles.quick}>
                <h2>Quick Links</h2>
                <a href="">About Us</a>
                <a href="">Services</a>
                <a href="">Testimonials</a>
                <a href="">Contact Us</a>
            </div>
            <div className={styles.follow}>
                <h2>Follow Us</h2>
                <div className={styles.icon}>
                <FaFacebookF style={{fontSize:"25px"}}/>
                <FaTwitter style={{fontSize:"25px"}}/>
                <FaInstagram style={{fontSize:"25px"}}/>
                <FaLinkedinIn style={{fontSize:"25px"}}/>

                </div>
            </div>
            <div className={styles.featured}>
                <h2>Featured Product</h2>
                <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
                <h4>Leather Brown Shoe</h4>
                <h3>60.00$</h3>
                <button>Add To Card</button>
            </div>
        </div>
        <p style={{padding:"80px 0"}}>Copyright ©2025 All rights reserved | This template is made with  <FaHeart />by Colorlib</p>

    </div>
  )
}

export default Footer