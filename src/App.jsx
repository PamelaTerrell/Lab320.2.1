import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from '../public/Components/Footer/Footer'
import Header from '../public/Components/Header/Header'
import Content from '../public/Components/Content/Content'



  
  
  
  



function App() {
  

  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck!" />
      <Content color="green" text="I think I've got it!" />
      <Footer />
       
    </>
  )
}

export default App
