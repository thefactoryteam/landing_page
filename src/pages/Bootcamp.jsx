import React from 'react'
import Header from '../components/shared/Header'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";
import Hero from '../components/Bootcamp/Hero';
import Slider from '../components/shared/Slider';
import SkillsTrack from '../components/Bootcamp/SkillsTrack';
import SectionSpacer from '../components/shared/SectionSpacer';

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
    </div>
  )
}

export default Bootcamp