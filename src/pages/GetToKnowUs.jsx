import React from 'react'
import Header from '../components/shared/Header'
import GallerySection from '../components/getToKnowUs/GallerySection'
import Footer from '../components/shared/Footer'
import OurStoryGetToKnow from '../components/getToKnowUs/OurStoryGetToKnow'
import OurVision from '../components/getToKnowUs/OurVision'
import OurMission from '../components/getToKnowUs/OurMission'
import OurValues from '../components/getToKnowUs/OurValues'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";
import { Helmet } from 'react-helmet-async'

const GetToKnowUs = () => {
  return (
    <>
      <Helmet>
        <title>Get to Know Us – The Factory</title>
        <meta name="description" content="Meet the minds shaping Africa’s tech future. Get to know the team, the mission, and the story behind The Factory HQ." />
        <link rel="canonical" href="https://techfactory.xyz/get-to-know-us" />
      </Helmet>

      <div className="h-[11b5vh] bg-[#FBFBFB]">
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
    </>

  )
}

export default GetToKnowUs