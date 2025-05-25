import React from 'react'
import Header from '../components/shared/Header'
import DarkLogo from "../assets/logo.png";
import DarkLogoSmall from "../assets/logo_icon.png";
import Hero from '../components/coWorkingSpace/Hero';
import Slider from '../components/shared/Slider';
import WhyCoworkingSpace from '../components/coWorkingSpace/WhyCoworkingSpace';
import InfoSection from '../components/booknow/InfoSection';
import BookForm from '../components/booknow/BookForm';
import Footer from '../components/shared/Footer';

const BookNowPage = () => {
    return (
        <div>
            <Header
                bigScreenlogo={DarkLogo}
                smallScreenLogo={DarkLogoSmall}
            />
              <Hero />
              <Slider />
              <WhyCoworkingSpace 
                text="The solo innovator package is designed for Freelancers and individuals seeking a professional workspace."
                align='text-center'
              />
              <InfoSection />
              <BookForm />
              <Footer />
        </div>
    )
}

export default BookNowPage