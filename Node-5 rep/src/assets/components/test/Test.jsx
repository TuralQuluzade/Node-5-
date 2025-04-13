import React from 'react'
import styles from "./Test.module.css"
const Test = () => {
  return (
    <div className={styles.container}>
        <h3>People Says</h3>
        <h1>Testimonials</h1>
        <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
        <span>"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, modi esse? In reprehenderit cupiditate magnam aliquam at earum, laboriosam eos, deserunt corrupti perspiciatis minus incidunt illum quaerat, odit praesentium quo?"</span>
        <h5>Robert Aguilar</h5>
    </div>
  )
}

export default Test