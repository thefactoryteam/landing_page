import React from 'react'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";
import Header from '../components/shared/Header';
import TermsLayout from '../components/terms/TermsLayout';
import Footer from '../components/shared/Footer';

const Terms = () => {
  return (
    <div>
        <Header
          bigScreenlogo={DarkLogo}
          smallScreenLogo={DarkLogoSmall}
        />
        <TermsLayout />
        <Footer />
    </div>
  )
}

export default Terms