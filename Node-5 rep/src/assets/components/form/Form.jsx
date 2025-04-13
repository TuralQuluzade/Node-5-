import React, { useState } from 'react'
import styles from "./Form.module.css"
import axios from 'axios'
const Form = () => {
    const [name,setName]=useState("")
    const [sname,setSname]=useState("")
    const [mail,setMail]=useState("")
    const [subject,setSubject]=useState("")
    const [message,setMessage]=useState("")
    const senData=(e)=>{
        e.preventDefault()
        axios.post("https://northwind.vercel.app/api/categories",{
            name:name,
            Surname:sname,
            Email:mail,
            Subject:subject,
            Message:message,
        })
    }
  return (
    <div className={styles.container}>
        <h4>Contact Form</h4>
        <h1>Get In Touch</h1>
        <div className={styles.ic}>
            <h2>Contact Form</h2>
            <form className={styles.main}onSubmit={senData}>
                <div className={styles.first}>
                <div className={styles.firsticb}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>First Name
                </div>
                <div className={styles.firstici}>
                <input type="text" value={sname} onChange={(e)=> setSname(e.target.value)}/>Last Name
                </div>
                </div>
                <div className={styles.mail}>
                <input type="text" value={mail} onChange={(e)=> setMail(e.target.value)}/>Email
                </div>
                <div className={styles.subject}>
                <input type="text" value={subject} onChange={(e)=> setSubject(e.target.value)}/>Subject
                </div>
                <div className={styles.msg}>
                <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)}/>Message
                </div>
                <button type='submit'>SEND MESSADE</button>
            </form>
        </div>
    </div>
  )
}

export default Form