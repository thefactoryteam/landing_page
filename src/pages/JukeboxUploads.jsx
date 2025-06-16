import React from 'react'
import WhiteLogo from "../assets/FactoryLogoWhite.png"
import WhiteLogoSmall from "../assets/logo_icon_white.png";
import Header from '../components/shared/Header';
import Hero from '../components/jukebox/Hero';
import JukeboxHeroImgApply from "../assets/JukeboxUploads/jukeboxHeroApply.png"
import { Helmet } from 'react-helmet-async';
import SectionHeaders from '../components/shared/SectionHeaders';
import JukeboxUploadForm from '../components/jukebox/JukeboxUploadForm';
import Footer from '../components/shared/Footer';

const JukeboxUploads = () => {
  return (
    <>
      <Helmet>
        <title>Apply to Jukebox – The Factory</title>
        <meta name="description" content="Are you a rising tech talent? Apply to join The Factory Jukebox and get discovered." />
        <link rel="canonical" href="https://techfactory.xyz/apply" />
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
          HeroImg={JukeboxHeroImgApply}
          title="Startup Program Application"
          desc="Welcome! We're excited to learn more about your startup. Please fill in the details and upload your required materials below. Before applying, make sure your startup meets the application criteria and you’ve prepared the required materials."
        />
        <div className='text-center mt-20'>
          <SectionHeaders 
          title="Upload Your Documents Here"
          desc="Please complete the form below and upload the following files:"
        />
        </div>

        <JukeboxUploadForm />
        <Footer />
        
      </div>
    </>

  )
}

export default JukeboxUploads