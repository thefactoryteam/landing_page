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
import CatalystHero from '../assets/coworking/teamHero.png'

const ApplyTeamCatalyst = () => {
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
                    heroImg={CatalystHero}
                    subtitle="The Team Catalyst Package"
                />
                <Slider />

                <BookNowComponent
                    whyText="The team catalyst package is designed for development teams or businesses needing a dedicated workspace for collaboration."
                    features={[
                        'Dedicated workspace for 4.',
                        'High-speed internet access.',
                        'Access to the kitchen (shared amenities).'
                    ]}

                    benefits={[
                        'A private and distraction-free workspace.',
                        'Flexible options for a team size of 4.',
                        'Build connections within a thriving business community.',
                    ]}
                />
                <BookForm />
                <Footer />
            </section>
        </>
    )
}

export default ApplyTeamCatalyst