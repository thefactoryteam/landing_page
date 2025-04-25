import React from 'react'
import Header from '../components/Header'
import Grid from '../assets/Grid.png'
import GallerySection from '../components/getToKnowUs/GallerySection'
import Footer from '../components/Footer'
import OurStoryGetToKnow from '../components/getToKnowUs/OurStoryGetToKnow'
import OurVision from '../components/getToKnowUs/OurVision'

const GetToKnowUs = () => {
  return (
    <div style={{ backgroundImage: `url(${Grid})` }} className="h-[115vh]">
        <Header />
        <GallerySection />
        <OurStoryGetToKnow />
        <OurVision />
        <Footer />
    </div>
  )
}

export default GetToKnowUs