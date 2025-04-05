import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Grid from '../assets/Grid.png'
import { Gallery } from '../components/Gallery'
import OurStory from '../components/OurStory'
import WhatWeDo from '../components/WhatWeDo'
import OurInnovators from '../components/OurInnovators'
import VideoPlayerSection from '../components/VideoPlayerSection'
import PartnerSection from '../components/PartnerSection'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
        <div style={{ backgroundImage: `url(${Grid})` }} className="h-screen">
            <Header />
            <Hero />
            {/* <Gallery /> */}
            <OurStory />
            <WhatWeDo />
            <OurInnovators />
            {/* <VideoPlayerSection /> */}
            <PartnerSection />
            <Footer />
        </div>
        
    </>
  )
}

export default Homepage