import React from 'react'
import styles from "./Serv.module.css"
import { FaPlusCircle } from "react-icons/fa";
import { BsFillTagsFill } from "react-icons/bs";
import { TbClockHour2 } from "react-icons/tb";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { IoMdCloudDone } from "react-icons/io";






const Serv = () => {
  return (
    <div className={styles.container}>
        <div className={styles.yazi}>
            <span>Our Services</span>
            <h1>We Offer Services</h1>
        </div>
        <div className={styles.part}>
            <div className={styles.ic}>
            <FaPlusCircle style={{fontSize:"50px",color:"#F16821"}}/>
            <div className={styles.aciq}>
                <h3>Business Consulting</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <a href="">Learn More</a>
            </div>
            </div>
            <div className={styles.ic}>
            <BsFillTagsFill style={{fontSize:"50px",color:"#F16821"}}/>
            <div className={styles.aciq}>
                <h3>Market Analysis</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <a href="">Learn More</a>
            </div>
            </div>
            <div className={styles.ic}>
            <TbClockHour2 style={{fontSize:"50px",color:"#F16821"}}/>
            <div className={styles.aciq}>
                <h3>User Monitoring</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <a href="">Learn More</a>
            </div>
            </div>
            <div className={styles.ic}>
            <CiBookmarkPlus style={{fontSize:"50px",color:"#F16821"}}/>
            <div className={styles.aciq}>
                <h3>Seller Consulting</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <a href="">Learn More</a>
            </div>
            </div>
            <div className={styles.ic}>
            <IoBag style={{fontSize:"50px",color:"#F16821"}}/>
            <div className={styles.aciq}>
                <h3>Business Consulting</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <a href="">Learn More</a>
            </div>
            </div>
            <div className={styles.ic}>
            <IoMdCloudDone style={{fontSize:"50px",color:"#F16821"}}/>
            <div className={styles.aciq}>
                <h3>Financial Investment</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <a href="">Learn More</a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Serv