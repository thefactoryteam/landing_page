import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import GetstartedCard from './GetstartedCard';
import SectionHeaders from '../shared/SectionHeaders';

export default function HowToGetStarted() {
    return (
        <section className='my-20'>
            <div className='max-w-3xl mx-auto'>
                <div className='text-center'>
                    <SectionHeaders 
                    title="How to Get Started"
                />
                </div>
                
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <GetstartedCard stepNumber="One"
                            stepLabel="Step"
                            title="Choose Your Package"
                            subtitle={<span>Pick The One That Fits Your <br /> Requirements.</span>}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GetstartedCard stepNumber="Two"
                            stepLabel="Step"
                            title="Contact Us"
                            subtitle={<span>Reach us via email or our <br /> website for inquiries or to <br /> schedule a tour.</span> }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GetstartedCard stepNumber="Three"
                            stepLabel="Step"
                            title="Join the Ecosystem"
                            subtitle={ <span>Set up and start working in a <br /> space designed to support your <br /> success.</span> }
                        />
                    </SwiperSlide>

                </Swiper>
            </div>

        </section>
    );
}
