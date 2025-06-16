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
import { Helmet } from 'react-helmet-async'

const InnnovationExpo = () => {
  return (
    <>
      <Helmet>
        <title>Innovation Expo – The Factory</title>
        <meta name="description" content="Experience Africa’s boldest tech showcases at our annual Innovation Expo — where talent meets opportunity." />
        <link rel="canonical" href="https://techfactory.xyz/innovation-expo" />
      </Helmet>

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
    </>

  )
}

export default InnnovationExpo