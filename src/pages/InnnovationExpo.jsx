import React from 'react'
import Header from '../components/Header'
import Hero from '../components/innovationExpo.jsx/Hero'
import Slider from '../components/innovationExpo.jsx/Slider'
import ExpoInfoSection from '../components/innovationExpo.jsx/ExpoInfoSection'
import OurPartners from '../components/innovationExpo.jsx/OurPartners'
import WhyPartnerWithUS from '../components/innovationExpo.jsx/WhyPartnerWithUS'
import Sponsor from '../components/innovationExpo.jsx/Sponsor'
import ImpactMetrics from '../components/innovationExpo.jsx/ImpactMetrics'
import Exhibitors from '../components/innovationExpo.jsx/Exhibitors'
import BootBenefits from '../components/innovationExpo.jsx/BootBenefits'
import Footer from '../components/Footer'

const InnnovationExpo = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Slider />
        <ExpoInfoSection />
        <OurPartners />
        <WhyPartnerWithUS />
        <Sponsor />
        <ImpactMetrics />
        <Exhibitors />
        <BootBenefits />
        <Footer />
    </div>
  )
}

export default InnnovationExpo