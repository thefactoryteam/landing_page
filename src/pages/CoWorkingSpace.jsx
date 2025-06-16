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
import { Helmet } from 'react-helmet-async';
import InnovHeroImg from "../assets/coworking/coHero.webp"
import HowToGetStarted from '../components/coWorkingSpace/HowToGetStarted';

const CoWorkingSpace = () => {
  return (
    <>
      <Helmet>
        <title>Co-working Space – The Factory</title>
        <meta name="description" content="Need a productive, innovative space to build? Discover our co-working spaces designed for Africa’s next creators." />
        <link rel="canonical" href="https://techfactory.xyz/co-working-space" />
      </Helmet>

      <div>
        <Header
          bigScreenlogo={DarkLogo}
          smallScreenLogo={DarkLogoSmall}
        />
        <Hero 
          heroImg={InnovHeroImg}
          subtitle="Welcome to your productivity oasis"
        />
        <Slider />
        <WhyCoworkingSpace
          text="The Digital HQ package is designed for digital companies outside Calabar looking to establish a prestigious headquarters in Tinapa."
        />
        <OfferWorkspace />
        <WhyChooseUs />
        <HowToGetStarted />
        <Footer />

      </div>
    </>

  )
}

export default CoWorkingSpace