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
import JukeboxHeroImg from '../assets/Jukebox/heroImg.webp'
import { Helmet } from 'react-helmet-async';

const Jukebox = () => {
  return (
    <>
      <Helmet>
        <title>The Factory Jukebox – Discover Tech Talent</title>
        <meta name="description" content="Browse and connect with Africa’s rising tech talents. The Factory Jukebox is a platform to find, hire, and celebrate skill." />
        <link rel="canonical" href="https://techfactory.xyz/jukebox" />
      </Helmet>

      <div>
        <Header
          bgScroll='bg-[#231F20AD]'
          bg='bg-[#231F20AD]'
          headerSpacer={false}
          bigScreenlogo={WhiteLogo}
          smallScreenLogo={WhiteLogoSmall}
          jukebox={true}
        />
        <Hero
          HeroImg={JukeboxHeroImg}
          title={<>
            JukeBox is The Factory's flagship <span className='text-[#71BF44]'>3-month</span> incubator program
          </>}
          desc="We identify, nurture, and invest in early-stage startups in exchange for 10% equity. Our goal is to help startups refine their business models, achieve market readiness, and foster innovation by connecting them with a network of investors, mentors, and strategic partners."
          jukeboxLogo={true}
        />
        <WhyJuxBox />
        <ApplicationCriteria />
        <RequiredMaterials />
        <ApplicationProcess />
        <Footer />
      </div>
    </>

  )
}

export default Jukebox