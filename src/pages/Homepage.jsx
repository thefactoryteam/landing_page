import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Grid from '../assets/Grid.png'

const Homepage = () => {
  return (
    <>
        <div style={{ backgroundImage: `url(${Grid})` }} className="h-screen">
            <Header />
            <Hero />
        </div>
        
    </>
  )
}

export default Homepage