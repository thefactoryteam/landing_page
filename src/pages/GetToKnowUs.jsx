import React from 'react'
import Header from '../components/Header'
import Grid from '../assets/Grid.png'
import GallerySection from '../components/getToKnowUs/GallerySection'
import Footer from '../components/Footer'
import OurStoryGetToKnow from '../components/getToKnowUs/OurStoryGetToKnow'
import OurVision from '../components/getToKnowUs/OurVision'
import OurMission from '../components/getToKnowUs/OurMission'
import OurValues from '../components/getToKnowUs/OurValues'

const GetToKnowUs = () => {
  return (
    <div style={{ backgroundImage: `url(${Grid})` }} className="h-[115vh] bg-[#F4F4F4]">
        <Header />
        <GallerySection />
        <OurStoryGetToKnow />
        <OurVision />
        <OurMission />
        <OurValues />
        <Footer />
    </div>
  )
}

export default GetToKnowUs