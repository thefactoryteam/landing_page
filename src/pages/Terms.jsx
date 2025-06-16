import React from 'react'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";
import Header from '../components/shared/Header';
import { TermsLayout } from '../components/terms/TermsLayout';
import Footer from '../components/shared/Footer';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service – The Factory</title>
        <meta name="description" content="Read our terms of service to understand your rights, responsibilities, and our commitments at The Factory HQ." />
        <link rel="canonical" href="https://techfactory.xyz/terms-of-service" />
      </Helmet>

      <div>
        <Header
          bigScreenlogo={DarkLogo}
          smallScreenLogo={DarkLogoSmall}
        />
        <TermsLayout />
        <Footer />
      </div>
    </>

  )
}

export default Terms