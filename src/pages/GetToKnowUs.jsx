import React from 'react'
import Header from '../components/shared/Header'
import Grid from '../assets/Grid.png'
import GallerySection from '../components/getToKnowUs/GallerySection'
import Footer from '../components/shared/Footer'
import OurStoryGetToKnow from '../components/getToKnowUs/OurStoryGetToKnow'
import OurVision from '../components/getToKnowUs/OurVision'
import OurMission from '../components/getToKnowUs/OurMission'
import OurValues from '../components/getToKnowUs/OurValues'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";

const GetToKnowUs = () => {
  return (
    <div style={{ backgroundImage: `url(${Grid})` }} className="h-[11b5vh] bg-[#F4F4F4]">
        <Header
          bigScreenlogo={DarkLogo}
          smallScreenLogo={DarkLogoSmall}
        />
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