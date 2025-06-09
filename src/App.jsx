import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Home from './home';

function App() {
  return (
      <>
      <Header className = "mu_store"/>
      <Home/>
      <Footer/>
    
      </>
  )
}

export default App
