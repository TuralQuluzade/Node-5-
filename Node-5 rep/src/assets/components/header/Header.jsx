import React from 'react'
import styles from  "./Header.module.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaBars } from "react-icons/fa";







const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.mainust}>
            <div className={styles.soc}>
                <div className={styles.face}>
                <FaFacebookF style={{width:"22px",height:"22px",color:"white"}}/>
                </div>
                <div className={styles.tw}>
                <FaTwitter style={{width:"22px",height:"22px",color:"white"}}/>
                </div>
                <div className={styles.ins}>
                <FaInstagram style={{width:"22px",height:"22px",color:"white"}}/>
                </div>
                <div className={styles.link}>
                <FaLinkedinIn style={{width:"22px",height:"22px",color:"white"}}/>
                </div>
            </div>
            
            <div className={styles.con}>
            <BsFillTelephoneFill style={{color:"#BA470C",width:"22px",height:"22px"}}/>
            <h4 style={{fontWeight:"300"}}>(+1) 234 5678 9101</h4>
            <MdMail style={{color:"#BA470C",width:"22px",height:"22px"}}/>
            <h4 style={{fontWeight:"300"}}>shop@yourdomain.com</h4>
            </div>
        </div>
        <div className={styles.mainalt}>
            <div className={styles.logo}>
                <h1 style={{fontWeight:"600"}}>Selling</h1><h1 style={{color:"#F16823",fontSize:"50px"}}>.</h1>
            </div>
            <div className={styles.info}>
                <a href="" >Home</a>
                <a href="">Products</a>
                <a href="">About Us</a>
                <a href="">Special</a>
                <a href="">Testimonials</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </div>
            <FaBars className={styles.bars}/>
                
        </div>
    </div>
  )
}

export default Header