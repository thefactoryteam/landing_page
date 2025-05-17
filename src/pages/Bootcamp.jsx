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

const Bootcamp = () => {
  return (
    <div>
        <Header
          bigScreenlogo={DarkLogo}
          smallScreenLogo={DarkLogoSmall}
        />
        <Hero />
        <Slider />
        <SectionSpacer />
        <SkillsTrack />
        <DiplomaProgram />
        <ProfessionalDiploma />
        <Footer />
    </div>
  )
}

export default Bootcamp