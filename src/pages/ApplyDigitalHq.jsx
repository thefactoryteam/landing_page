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
import HqHero from '../assets/coworking/hqHero.png'

const ApplyDigitalHq = () => {
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
                    heroImg={HqHero}
                    subtitle="The Digital HQ Package (Business Registration)"
                />
                <Slider />

                <BookNowComponent
                    whyText="The Digital HQ package is designed for digital companies outside Calabar looking to establish a prestigious headquarters in Tinapa."
                    features={[
                        'Dedicated work desks for up to 4 team members.',
                        'Free Trade Zone License (facilitated for your company).',
                        'High-speed internet access.',
                        'Virtual office address for correspondence.',
                        'Business formation and legal compliance.',
                        'Company signage on The Factory Logo Board.'
                    ]}


                    benefits={[
                        'Access Free Trade Zone benefits like tax exemptions and streamlined logistics.',
                        'Establish a credible headquarters address in Tinapa.',
                        'A collaborative environment to connect with other businesses.',
                    ]}
                />
                <BookForm />
                <Footer />
            </section>
        </>
    )
}

export default ApplyDigitalHq