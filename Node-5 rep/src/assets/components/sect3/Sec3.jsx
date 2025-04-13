import React, { useState } from 'react'
import styles from "./Sect.module.css"
import axios from 'axios'


const Sec3 = () => {
    const [email,setEmail]=useState("")
// const yoxlama=()=>{
//     if (email==="@") {
//         alert("Email Ugurla Qeyd Edildi")
//     }else{
//         alert("Zehmet Olmasa kecerli Mail Daxil edin!")
//     }
// }
    
const senData=(e) =>{
    e.preventDefault()
    axios.post("https://northwind.now.sh/api/categories",{
        email:email
    })
    
    
}
  return (
    <div className={styles.container}>
        <div className={styles.reng}>
        <div className={styles.main}>
            <h1>Get notified on each updates.</h1>
            <div className={styles.inp}>
                <form action="" className={styles.form}onSubmit={senData}>
                <input type="text" value={email} className={styles.mail} placeholder='   Enter your Email adress' onChange={(e)=> setEmail(e.target.value)}/>
                <button type='submit'className={styles.send}>Subscribe</button>
                </form>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
        </div>
        </div>
    </div>
  )
}

export default Sec3