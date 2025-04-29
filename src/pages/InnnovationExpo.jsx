import React from 'react'
import Header from '../components/Header'
import Hero from '../components/innovationExpo.jsx/Hero'
import Slider from '../components/innovationExpo.jsx/Slider'
import ExpoInfoSection from '../components/innovationExpo.jsx/ExpoInfoSection'
import OurPartners from '../components/innovationExpo.jsx/OurPartners'
import WhyPartnerWithUS from '../components/innovationExpo.jsx/WhyPartnerWithUS'

const InnnovationExpo = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Slider />
        <ExpoInfoSection />
        <OurPartners />
        <WhyPartnerWithUS />
    </div>
  )
}

export default InnnovationExpo