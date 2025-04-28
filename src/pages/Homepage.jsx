import React from 'react'
import Header from '../components/Header'
import Grid from '../assets/Grid.png'
// import { Gallery } from '../components/Home/Gallery'
// import VideoPlayerSection from '../components/Home/VideoPlayerSection'
import Footer from '../components/Footer'
import Hero from '../components/homeComponents/Hero'
import OurStory from '../components/homeComponents/OurStory'
import WhatWeDo from '../components/homeComponents/WhatWeDo'
import OurInnovators from '../components/homeComponents/OurInnovators'
import PartnerSection from '../components/homeComponents/PartnerSection'

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