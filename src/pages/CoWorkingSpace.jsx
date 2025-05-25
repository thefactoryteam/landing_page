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
        <WhyCoworkingSpace 
          text="The Factory Co-Working Space is where innovation meets productivity. Experience a peaceful workspace away from city distractions. Explore our thoughtfully designed packages tailored to meet your diverse needs, whether you are a freelancer, a startup, or an established team."
        />
        <OfferWorkspace />
        <WhyChooseUs />
        <Footer />
        
    </div>
  )
}

export default CoWorkingSpace