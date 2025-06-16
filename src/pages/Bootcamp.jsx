import React from 'react'
import Header from '../components/shared/Header'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";
import Hero from '../components/Bootcamp/Hero';
import Slider from '../components/shared/Slider';
import SkillsTrack from '../components/Bootcamp/SkillsTrack';
import SectionSpacer from '../components/shared/SectionSpacer';
import DiplomaProgram from '../components/Bootcamp/DiplomaProgram';
import ProfessionalDiploma from '../components/Bootcamp/ProfessionalDiploma';
import Footer from '../components/shared/Footer';
import { Helmet } from 'react-helmet-async';

const Bootcamp = () => {
  return (
    <>
      <Helmet>
        <title>Bootcamps & Training – The Factory</title>
        <meta name="description" content="Level up with expert-led tech training and immersive bootcamps. Designed to prepare Africa’s talent for the global stage." />
        <link rel="canonical" href="https://techfactory.xyz/bootcamps-and-training" />
      </Helmet>

      <div>
        <Header
          bigScreenlogo={DarkLogo}
          smallScreenLogo={DarkLogoSmall}
        />
        <Hero />
        <div className='md:hidden'>
          <SectionSpacer />
        </div>

        <Slider />
        <SectionSpacer />
        <SkillsTrack />
        <DiplomaProgram />
        <ProfessionalDiploma />
        <Footer />
      </div>
    </>

  )
}

export default Bootcamp