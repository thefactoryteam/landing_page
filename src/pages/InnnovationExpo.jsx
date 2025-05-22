import React from 'react'
import Header from '../components/shared/Header'
import Hero from '../components/innovationExpo/Hero'
import Slider from '../components/shared/Slider'
import ExpoInfoSection from '../components/innovationExpo/ExpoInfoSection'
import OurPartners from '../components/innovationExpo/OurPartners'
import WhyPartnerWithUS from '../components/innovationExpo/WhyPartnerWithUS'
import Sponsor from '../components/innovationExpo/Sponsor'
import ImpactMetrics from '../components/innovationExpo/ImpactMetrics'
import Exhibitors from '../components/innovationExpo/Exhibitors'
import BootBenefits from '../components/innovationExpo/BootBenefits'
import Footer from '../components/shared/Footer'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";

const InnnovationExpo = () => {
  return (
    <div>
        <Header
          bigScreenlogo={DarkLogo}
          smallScreenLogo={DarkLogoSmall}
        />
        <Hero />
        <Slider />
        <ExpoInfoSection />
        {/* <OurPartners /> */}
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