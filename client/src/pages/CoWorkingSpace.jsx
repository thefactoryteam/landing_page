import React from 'react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";
import Hero from '../components/coWorkingSpace/Hero';
import Slider from '../components/shared/Slider';
import WhyCoworkingSpace from '../components/coWorkingSpace/WhyCoworkingSpace';
import OfferWorkspace from '../components/coWorkingSpace/OfferWorkspace';
import WhyChooseUs from '../components/coWorkingSpace/WhyChooseUs';

const CoWorkingSpace = () => {
  return (
    <div>
        <Header
          bigScreenlogo={DarkLogo}
          smallScreenLogo={DarkLogoSmall}
        />
        <Hero />
        <Slider />
        <WhyCoworkingSpace />
        <OfferWorkspace />
        <WhyChooseUs />
        <Footer />
        
    </div>
  )
}

export default CoWorkingSpace