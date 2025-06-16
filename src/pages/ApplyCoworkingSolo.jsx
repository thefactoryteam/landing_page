import React from 'react'
import Header from '../components/shared/Header'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";
import Hero from '../components/coWorkingSpace/Hero';
import Slider from '../components/shared/Slider';
import BookNowComponent from './BookNowPage';
import BookForm from '../components/booknow/BookForm';
import Footer from '../components/shared/Footer';
import { Helmet } from 'react-helmet-async';
import SoloHero from '../assets/coworking/soloHero.png'

const ApplyCoworkingSolo = () => {
    return (
        <>
            <Helmet>
                <title>Book Now – The Factory</title>
                <meta name="description" content="Ready to make a move? Book your space, session, or consultation with The Factory HQ." />
                <link rel="canonical" href="https://techfactory.xyz/book-now" />
            </Helmet>
            <section>
                <Header
                    bigScreenlogo={DarkLogo}
                    smallScreenLogo={DarkLogoSmall}
                />
                <Hero
                    heroImg={SoloHero}
                    subtitle="The Solo Innovator Package"
                />
                <Slider />
                <BookNowComponent
                    whyText="The solo innovator package is designed for Freelancers and individuals seeking a professional workspace."
                    features={[
                        'One Dedicated Work Desk.',
                        'High-Speed Internet Access.',
                        'Access To The Kitchen (Shared Amenities).',
                    ]}
                    benefits={[
                        'Boost Your Productivity In A Professional Environment.',
                        'Reliable Internet Access To Power Your Work.',
                        'Networking Opportunities With Like-Minded Professionals.',
                    ]}
                />
                <BookForm />
                <Footer />
            </section>
        </>
    )
}

export default ApplyCoworkingSolo