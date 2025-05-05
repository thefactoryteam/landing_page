import React from 'react'
import Header from '../components/shared/Header'
import Hero from '../components/jukebox/Hero'
import WhiteLogo from "../assets/FactoryLogoWhite.png"
import WhiteLogoSmall from "../assets/logo_icon_white.png";
import WhyJuxBox from '../components/jukebox/WhyJuxBox';
import ApplicationCriteria from '../components/jukebox/ApplicationCriteria';
import RequiredMaterials from '../components/jukebox/RequiredMaterials';
import ApplicationProcess from '../components/jukebox/ApplicationProcess';
import Footer from '../components/shared/Footer';

const Jukebox = () => {
  return (
    <div>
        <Header 
            bgScroll='bg-[#231F20AD]'
            bg='bg-[#231F20AD]'
            headerSpacer={false}
            bigScreenlogo={WhiteLogo}
            smallScreenLogo={WhiteLogoSmall}
        />
        <Hero />
        <WhyJuxBox />
        <ApplicationCriteria />
        <RequiredMaterials />
        <ApplicationProcess />
        <Footer />
    </div>
  )
}

export default Jukebox