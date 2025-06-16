import React from 'react'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import PrivacyLayout from '../components/terms/PrivacyLayout';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – The Factory</title>
        <meta name="description" content="We value your data privacy. Read our transparent privacy policy to learn how we handle your information." />
        <link rel="canonical" href="https://techfactory.xyz/privacy-policy" />
      </Helmet>

      <div>
        <Header
          bigScreenlogo={DarkLogo}
          smallScreenLogo={DarkLogoSmall}
        />
        <PrivacyLayout />
        <Footer />
      </div>
    </>

  )
}

export default PrivacyPolicy