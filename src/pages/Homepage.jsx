import React from 'react'
import Header from '../components/Header'
import Grid from '../assets/Grid.png'
// import { Gallery } from '../components/Home/Gallery'
import WhatWeDo from '../components/Home/WhatWeDo'
import OurInnovators from '../components/Home/OurInnovators'
// import VideoPlayerSection from '../components/Home/VideoPlayerSection'
import PartnerSection from '../components/Home/PartnerSection'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import OurStory from '../components/Home/OurStory'

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