import React from 'react'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";
import Header from '../components/shared/Header';
import ContactDetail from '../components/contact/ContactDetails';
import Map from '../components/contact/Map';
import Footer from '../components/shared/Footer';

const Contact = () => {
  return (
    <div className='bg-white relative overflow-hidden'>

      {/* Decorative Background Circles */}
      <div className="absolute -top-14 -left-28 md:-left-32 w-44 md:w-64 h-44 md:h-64 bg-[#2BE028] rounded-full z-10"></div>
      <div className="absolute bottom-[200px] hidden md:block -left-9 w-32 h-32 bg-[#2BE028] rounded-full z-10"></div>
      <div className="absolute top-10 md:top-[300px] right-10 md:-right-32 w-14 md:w-52 h-14 md:h-52 bg-[#ECFBEB] rounded-full z-10"></div>
      <div className="absolute top-[750px] md:top-[700px] -right-16 w-28 md:w-40 h-28 md:h-40 bg-[#2BE028] rounded-full z-10"></div>
      <Header
        bigScreenlogo={DarkLogo}
        smallScreenLogo={DarkLogoSmall}
        bg="bg-white/60 border-b border-gray-200 backdrop-blur-md"
      />
      <ContactDetail />
      <Map />
      <Footer />
    </div>
  )
}

export default Contact