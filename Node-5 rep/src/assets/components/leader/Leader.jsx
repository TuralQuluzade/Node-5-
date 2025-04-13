import React from 'react'
import styles from "./Leader.module.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const Leader = () => {
  return (
    <div className={styles.container}>
        <div className={styles.giris}>
            <p>Team</p>
            <h1>Leadership</h1>
        </div>
        <div className={styles.man}>
        <div className={styles.mans}>
            <img src="https://preview.colorlib.com/theme/selling//images/person_2.jpg" alt="" />
            <span>John Rooster</span>
            <h6>Co-Founder, President</h6>
            <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
            <div className={styles.soc}>
            <div className={styles.face}>
            <FaFacebookF />
            </div>
            <div className={styles.tw}>
                <FaTwitter />
                </div>
            <div className={styles.link}>
            <FaLinkedinIn />
            </div>
            <div className={styles.ins}>
                <FaInstagram />
                </div>
            </div>
        </div>
        <div className={styles.mans}>
            <img src="https://preview.colorlib.com/theme/selling//images/person_3.jpg" alt="" />
            <span>Tom Sharp</span>
            <h6>Co-Founder, COO</h6>
            <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
            <div className={styles.soc}>
            <div className={styles.face}>
            <FaFacebookF />
            </div>
            <div className={styles.tw}>
                <FaTwitter />
                </div>
            <div className={styles.link}>
            <FaLinkedinIn />
            </div>
            <div className={styles.ins}>
                <FaInstagram />
                </div>
            </div>
        </div>
        <div className={styles.mans}>
            <img src="https://preview.colorlib.com/theme/selling//images/person_4.jpg" alt="" />
            <span>Winston Hodson</span>
            <h6>Marketing</h6>
            <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
            <div className={styles.soc}>
            <div className={styles.face}>
            <FaFacebookF />
            </div>
            <div className={styles.tw}>
                <FaTwitter />
                </div>
            <div className={styles.link}>
            <FaLinkedinIn />
            </div>
            <div className={styles.ins}>
                <FaInstagram />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Leader