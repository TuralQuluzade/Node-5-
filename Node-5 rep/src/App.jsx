import React, { useEffect, useState } from 'react'
import Header from './assets/components/header/Header'
import Sect1 from './assets/components/sect1/Sect1'
import Sect2 from './assets/components/sect2/Sect2'
import axios from 'axios'
import Card from './assets/components/card/Card'
import Sect3 from "./assets/components/sect3/Sec3"
import Desc from './assets/components/desc/Desc'
import Sect4 from './assets/components/sect4/Sect4'
import "./App.css"
import Ndesc from './assets/components/ndesc/Ndesc'
import About from './assets/components/about/About'
import Leader from './assets/components/leader/Leader'
import Sayac from './assets/components/sayac/Sayac'
import Serv from './assets/components/serv/Serv'
import Test from './assets/components/test/Test'
import Post from './assets/components/post/Post'
import Form from './assets/components/form/Form'
import Footer from './assets/components/footer/Footer'


const App = () => {
  const [data,setData]=useState([])
  const getData =()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setData(res.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    
    <div>
      <Header/>
      <Sect1/>
      <Sect2/>
      <div style={{display:"flex",flexWrap:"wrap",width:"100%",justifyContent:"center",alignItems:"center",height:"1200px"}}>
        <div style={{display:"flex",flexWrap:"wrap",width:"60%",gap:"30px",justifyContent:"center",height:"90%"}}>
          
        {data && data.map((x) => <Card item ={x}/>).slice(0,6)}
        </div>
      </div>
      <Sect3/>
      <Sect4/>
      <div className='main'>
        <div className="card">
        {data && data.map((x) => <Desc item ={x}/>).slice(6,7)}
        </div>
      </div>
      <div className='main1'>
        <div className="card1">
        {data && data.map((x) => <Ndesc item ={x}/>).slice(8,9 )}
        </div>
      </div>
      <About/>
      <Leader/>
      <Sayac/>
      <Serv/>
      <Test/>
      
      <div className='main2'>
        <div className="text">
                    <h3>Blog</h3>
                    <h1>Blog Posts</h1>
                </div>
        <div className="card2">

        {data && data.map((x) => <Post item ={x}/>).slice(9,12 )}
        </div>
      </div>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
